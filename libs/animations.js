/**
 * Page animations (vanilla JS, no dependencies).
 * Called once from pages/index.js after the page mounts. All effects are progressive:
 * without JavaScript the content is fully visible, just static.
 */
import { META_PIXEL_ID, META_PIXEL_CLICK_EVENT } from '@/libs/config';

let started = false;

export function initLandingPage(root) {
  // Runs once per page load (React Strict Mode mounts effects twice in development).
  if (started || !root) return;
  started = true;

  root.classList.add('js-on');
  // Animations always run: many Windows PCs ship with "animation effects" off, which hid them all.
  var reduce = false;
  var fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var $ = function (s, c) {
    return (c || document).querySelector(s);
  };
  var $$ = function (s, c) {
    return [].slice.call((c || document).querySelectorAll(s));
  };
  var clamp = function (v, a, b) {
    return Math.max(a, Math.min(b, v));
  };
  var mobile = function () {
    return window.matchMedia('(max-width:720px)').matches;
  };
  var css = getComputedStyle(root);
  var rgb = function (name) {
    return css.getPropertyValue('--rgb-' + name).trim();
  };
  var FONT_SERIF = css.getPropertyValue('--font-serif').trim() || 'Georgia, serif';
  var C = {
    gold: rgb('gold'),
    goldLight: rgb('gold-light'),
    goldDark: rgb('gold-dark'),
    goldSoft: rgb('gold-soft'),
    offwhite: rgb('offwhite'),
    dust: rgb('dust'),
    star: rgb('star'),
    starBright: rgb('star-bright'),
    particle: rgb('particle'),
    glow: rgb('glow'),
    dim: rgb('dim'),
    rim: rgb('rim'),
    shine: rgb('shine'),
    handleTop: rgb('handle-top'),
    handleMid: rgb('handle-mid'),
    handleBottom: rgb('handle-bottom'),
  };
  var rgba = function (c, a) {
    return 'rgba(' + c + ',' + a + ')';
  };

  /* Meta Pixel: track clicks on the apply buttons */
  if (META_PIXEL_ID)
    $$('.js-apply').forEach(function (a) {
      a.addEventListener('click', function () {
        if (window.fbq) window.fbq('track', META_PIXEL_CLICK_EVENT);
      });
    });

  /* opening signature */
  var go = false;
  function start() {
    if (go) return;
    go = true;
    requestAnimationFrame(function () {
      root.classList.add('loaded');
    });
  }
  var intro = $('#pjIntro'),
    seen = false;
  try {
    seen = sessionStorage.getItem('pjIntro') === '1';
    sessionStorage.setItem('pjIntro', '1');
  } catch (e) {}
  if (reduce || seen) {
    intro.style.display = 'none';
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(start);
    setTimeout(start, 1000);
  } else {
    var introGo = false;
    var runIntro = function () {
      if (introGo) return;
      introGo = true;
      intro.classList.add('go');
      setTimeout(function () {
        intro.classList.add('out');
        start();
      }, 1700);
      setTimeout(function () {
        intro.style.display = 'none';
      }, 2700);
    };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(runIntro);
    setTimeout(runIntro, 900);
  }

  /* ============ HERO TITLE: LETTERS SETTLING IN ============ */
  (function () {
    var h = $('.pj-hero h1'),
      n = 0;
    (function walk(node) {
      [].slice.call(node.childNodes).forEach(function (t) {
        if (t.nodeType === 3) {
          var frag = document.createDocumentFragment();
          t.textContent.split(/(\s+)/).forEach(function (w) {
            if (!w) return;
            if (/^\s+$/.test(w)) {
              frag.appendChild(document.createTextNode(w));
              return;
            }
            var wd = document.createElement('span');
            wd.className = 'wd';
            w.split('').forEach(function (c) {
              var l = document.createElement('span');
              l.className = 'lt';
              l.textContent = c;
              l.style.setProperty('--ld', (0.15 + n * 0.028).toFixed(3) + 's');
              n++;
              wd.appendChild(l);
            });
            frag.appendChild(wd);
          });
          t.parentNode.replaceChild(frag, t);
        } else if (t.nodeType === 1) walk(t);
      });
    })(h);
  })();

  /* ============ DRAWN CARD BORDERS ============ */
  var NSV = 'http://www.w3.org/2000/svg',
    bordered = $$('.pj-acard, .pj-frame, .pj-invite');
  bordered.forEach(function (el) {
    var svg = document.createElementNS(NSV, 'svg');
    svg.setAttribute('class', 'bd');
    svg.setAttribute('aria-hidden', 'true');
    var r = document.createElementNS(NSV, 'rect');
    r.setAttribute('pathLength', '1');
    svg.appendChild(r);
    el.insertBefore(svg, el.firstChild);
  });
  function sizeBorders() {
    bordered.forEach(function (el) {
      var svg = el.firstChild,
        r = svg.firstChild,
        w = el.offsetWidth,
        h = el.offsetHeight,
        rad = parseFloat(getComputedStyle(el).borderTopLeftRadius) || 0;
      svg.setAttribute('viewBox', '0 0 ' + w + ' ' + h);
      r.setAttribute('x', 0.6);
      r.setAttribute('y', 0.6);
      r.setAttribute('width', Math.max(0, w - 1.2));
      r.setAttribute('height', Math.max(0, h - 1.2));
      r.setAttribute('rx', rad);
    });
  }
  if (window.ResizeObserver) {
    var ro = new ResizeObserver(function () {
      sizeBorders();
    });
    bordered.forEach(function (el) {
      ro.observe(el);
    });
  }
  /* light that follows the mouse inside cards / single glint on touch devices */
  $$('.pj-acard').forEach(function (el) {
    if (fine)
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        el.style.setProperty('--gx', e.clientX - r.left + 'px');
        el.style.setProperty('--gy', e.clientY - r.top + 'px');
      });
  });
  if (!fine && !reduce) {
    var gio = new IntersectionObserver(
      function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) {
            var el = e.target;
            setTimeout(function () {
              el.classList.add('glint');
            }, 900);
            gio.unobserve(el);
          }
        });
      },
      { threshold: 0.6 },
    );
    $$('.pj-acard').forEach(function (el) {
      gio.observe(el);
    });
  }
  /* self-drawing icons */
  $$('[data-draw]').forEach(function (svg) {
    $$('path,rect,circle', svg).forEach(function (el, i) {
      var l = 120;
      try {
        l = Math.ceil(el.getTotalLength()) + 2;
      } catch (e) {}
      el.style.setProperty('--l', l);
      el.style.setProperty('--dd', 0.3 + i * 0.15 + 's');
    });
  });
  /* outcome icons: play once on touch devices */
  if (!fine && !reduce) {
    var pio = new IntersectionObserver(
      function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) {
            var el = e.target;
            setTimeout(function () {
              el.classList.add('play');
            }, 500);
            setTimeout(function () {
              el.classList.remove('play');
            }, 3200);
            pio.unobserve(el);
          }
        });
      },
      { threshold: 0.7 },
    );
    $$('.pj-gain.pj-acard, .pj-o.pj-acard').forEach(function (el) {
      pio.observe(el);
    });
  }

  /* delivery format calendar */
  (function () {
    var g = $('.sc-cal .days');
    if (!g) return;
    var NS = 'http://www.w3.org/2000/svg',
      k = 0;
    for (var r = 0; r < 4; r++)
      for (var c = 0; c < 6; c++) {
        var x = 16 + c * 16.5,
          y = 38 + r * 15.5,
          el = document.createElementNS(NS, 'rect');
        el.setAttribute('x', x);
        el.setAttribute('y', y);
        el.setAttribute('width', 11);
        el.setAttribute('height', 9);
        el.setAttribute('rx', 2.5);
        el.setAttribute('class', r === 2 && c === 3 ? 'd hot' : 'd');
        el.style.setProperty('--k', k++);
        g.appendChild(el);
      }
  })();

  /* rolling numbers */
  $$('.roll').forEach(function (el, n) {
    var digits = el.dataset.roll.split('');
    el.textContent = '';
    digits.forEach(function (d, i) {
      var col = document.createElement('span');
      col.className = 'col';
      for (var r = 0; r < 2; r++)
        for (var k = 0; k < 10; k++) {
          var sp = document.createElement('span');
          sp.textContent = k;
          col.appendChild(sp);
        }
      col.style.setProperty('--to', 10 + +d);
      col.style.setProperty('--cd', i * 0.18 + n * 0.12 + 's');
      el.appendChild(col);
    });
  });

  /* ============ WORD MASK REVEAL ============ */
  $$('[data-mask]').forEach(function (el) {
    (function walk(node) {
      [].slice.call(node.childNodes).forEach(function (n) {
        if (n.nodeType === 3) {
          var frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(function (part) {
            if (!part) return;
            if (/^\s+$/.test(part)) {
              frag.appendChild(document.createTextNode(part));
              return;
            }
            var o = document.createElement('span');
            o.className = 'mw';
            var i = document.createElement('span');
            i.className = 'mi';
            i.textContent = part;
            o.appendChild(i);
            frag.appendChild(o);
          });
          n.parentNode.replaceChild(frag, n);
        } else if (n.nodeType === 1) walk(n);
      });
    })(el);
    $$('.mi', el).forEach(function (m, k) {
      m.style.transitionDelay = k * 0.05 + 's';
    });
  });

  /* ============ TYPED STATEMENT + STRIKE-THROUGHS ============ */
  var st = $('#pjStatement'),
    words = [],
    litN = -1,
    strikes = [];
  var groups = (st.dataset.strike || '')
    .split('|')
    .filter(Boolean)
    .map(function (g) {
      return g.trim().split(/\s+/);
    });
  (function () {
    var parts = st.textContent.trim().split(/\s+/);
    st.textContent = '';
    parts.forEach(function (w, i) {
      var s = document.createElement('span');
      s.className = 'sw';
      w.split('').forEach(function (c) {
        var ch = document.createElement('span');
        ch.className = 'ch';
        ch.textContent = c;
        s.appendChild(ch);
      });
      st.appendChild(s);
      if (i < parts.length - 1) st.appendChild(document.createTextNode(' '));
      words.push(s);
    });
    groups = groups.map(function (g) {
      for (var i = 0; i < parts.length; i++) {
        var ok = true;
        for (var j = 0; j < g.length; j++) if (parts[i + j] !== g[j]) ok = false;
        if (ok) return words.slice(i, i + g.length);
      }
      return [];
    });
    groups[0].forEach(function (w) {
      w.classList.add('g');
    });
    groups.forEach(function (g) {
      g.forEach(function (w) {
        w.classList.add('x');
      });
    });
  })();
  function buildStrikes() {
    strikes.forEach(function (s) {
      s.remove();
    });
    strikes = [];
    var base = st.getBoundingClientRect(),
      k = 0;
    groups.forEach(function (g) {
      var lines = [];
      g.forEach(function (w) {
        var r = w.getBoundingClientRect(),
          last = lines[lines.length - 1];
        if (last && Math.abs(last.top - r.top) < 4) last.right = r.right;
        else lines.push({ top: r.top, left: r.left, right: r.right, h: r.height });
      });
      lines.forEach(function (L) {
        var s = document.createElement('i');
        s.className = 'strike';
        s.style.left = L.left - base.left - 3 + 'px';
        s.style.width = L.right - L.left + 6 + 'px';
        s.style.top = L.top - base.top + L.h * 0.56 + 'px';
        s.style.setProperty('--sd', k * 0.35 + 's');
        k++;
        st.appendChild(s);
        strikes.push(s);
      });
    });
  }
  var strikeOn = null,
    typed = false;
  function typeStatement() {
    if (typed) return;
    typed = true;
    var chars = $$('.ch', st),
      caret = document.createElement('span');
    caret.className = 'pj-caret';
    if (reduce) {
      chars.forEach(function (c) {
        c.classList.add('v');
      });
      setStrikes(true);
      return;
    }
    var k = 0;
    (function next() {
      if (k < chars.length) {
        chars[k].classList.add('v');
        chars[k].parentNode.insertBefore(caret, chars[k].nextSibling);
        k++;
        setTimeout(next, chars[k - 1].textContent === ' ' ? 20 : 34 + Math.random() * 30);
      } else {
        setTimeout(function () {
          caret.remove();
          setStrikes(true);
        }, 650);
      }
    })();
  }
  new IntersectionObserver(
    function (es) {
      if (es[0].isIntersecting) typeStatement();
    },
    { threshold: 0.6 },
  ).observe(st);
  function setStrikes(on) {
    if (on === strikeOn) return;
    strikeOn = on;
    strikes.forEach(function (s) {
      s.classList.toggle('on', on);
    });
    groups.forEach(function (g) {
      g.forEach(function (w) {
        w.classList.toggle('cut', on);
      });
    });
  }

  (function () {
    var el = $('#pjSteal'),
      t = el.textContent;
    el.textContent = '';
    t.split('').forEach(function (c, i) {
      var s = document.createElement('i');
      s.textContent = c;
      s.style.setProperty('--i', i);
      el.appendChild(s);
    });
  })();

  /* reveal on scroll */
  var io = new IntersectionObserver(
    function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: '0px 0px -5% 0px' },
  );
  var revealSel = '[data-rv],[data-mark],[data-fill],[data-mask],.pj-acard,#pjBioPhoto,#pjSteal';
  $$(revealSel).forEach(function (el) {
    io.observe(el);
  });
  if (reduce)
    $$(revealSel).forEach(function (el) {
      el.classList.add('in');
    });

  /* counters */
  var cio = new IntersectionObserver(
    function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return;
        cio.unobserve(e.target);
        var el = e.target,
          to = +el.dataset.count,
          t0 = performance.now();
        if (reduce) return;
        (function tick(t) {
          var k = Math.min(1, (t - t0) / 1900);
          el.textContent = Math.max(1, Math.round(to * (1 - Math.pow(1 - k, 3))));
          if (k < 1) requestAnimationFrame(tick);
        })(t0);
      });
    },
    { threshold: 0.5 },
  );
  $$('[data-count]').forEach(function (el) {
    cio.observe(el);
  });

  /* spotlight on dark bands and magnetic buttons */
  if (fine)
    $$('[data-spot]').forEach(function (sec) {
      sec.addEventListener('pointermove', function (e) {
        var r = sec.getBoundingClientRect();
        sec.style.setProperty('--mx', (((e.clientX - r.left) / r.width) * 100).toFixed(1) + '%');
        sec.style.setProperty('--my', (((e.clientY - r.top) / r.height) * 100).toFixed(1) + '%');
      });
    });
  if (fine && !reduce)
    $$('.magnetic').forEach(function (b) {
      b.addEventListener('pointermove', function (e) {
        var r = b.getBoundingClientRect();
        b.style.setProperty('--bx', (e.clientX - r.left - r.width / 2) * 0.16 + 'px');
        b.style.setProperty('--by', (e.clientY - r.top - r.height / 2) * 0.26 + 'px');
      });
      b.addEventListener('pointerleave', function () {
        b.style.setProperty('--bx', '0px');
        b.style.setProperty('--by', '0px');
      });
    });

  /* ============ SMOOTH WHEEL SCROLL (desktop) ============ */
  var inFrame = false;
  try {
    inFrame = window.self !== window.top;
  } catch (e) {
    inFrame = true;
  }
  var smooth = {
    on: fine && !reduce && !mobile() && !inFrame,
    cur: window.scrollY,
    target: window.scrollY,
    running: false,
  };
  function maxScroll() {
    return document.documentElement.scrollHeight - window.innerHeight;
  }
  function smoothStep() {
    smooth.cur += (smooth.target - smooth.cur) * 0.11;
    if (Math.abs(smooth.target - smooth.cur) < 0.5) {
      smooth.cur = smooth.target;
      smooth.running = false;
    }
    window.scrollTo(0, smooth.cur);
    if (smooth.running) requestAnimationFrame(smoothStep);
  }
  function smoothTo(y) {
    smooth.target = clamp(y, 0, maxScroll());
    if (!smooth.running) {
      smooth.cur = window.scrollY;
      smooth.running = true;
      requestAnimationFrame(smoothStep);
    }
  }
  if (smooth.on) {
    window.addEventListener(
      'wheel',
      function (e) {
        if (e.ctrlKey || e.defaultPrevented) return;
        e.preventDefault();
        var d = e.deltaY * (e.deltaMode === 1 ? 32 : e.deltaMode === 2 ? window.innerHeight : 1);
        if (!smooth.running) smooth.target = window.scrollY;
        smoothTo(smooth.target + d);
      },
      { passive: false },
    );
    window.addEventListener(
      'scroll',
      function () {
        if (!smooth.running) {
          smooth.cur = smooth.target = window.scrollY;
        }
      },
      { passive: true },
    );
  }
  /* in-page anchors */
  $$('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id.length < 2) return;
      var t = document.querySelector(id);
      if (!t) return;
      e.preventDefault();
      var y = t.getBoundingClientRect().top + window.scrollY - (id === '#aplicacao' ? 40 : 60);
      if (smooth.on) smoothTo(y);
      else window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
    });
  });

  /* ============ HERO: depth and spotlight ============ */
  var stageH = $('#pjStageHero'),
    spot = $('#pjSpot'),
    hx = 0,
    hy = 0,
    thx = 0,
    thy = 0,
    lx = 50,
    ly = 45,
    tlx = 50,
    tly = 45;
  if (fine && !reduce) {
    $('#topo').addEventListener('pointermove', function (e) {
      thx = (e.clientX / window.innerWidth - 0.5) * 2;
      thy = (e.clientY / window.innerHeight - 0.5) * 2;
      var r = stageH.getBoundingClientRect();
      tlx = ((e.clientX - r.left) / r.width) * 100;
      tly = ((e.clientY - r.top) / r.height) * 100;
    });
    $('#topo').addEventListener('pointerleave', function () {
      thx = 0;
      thy = 0;
      tlx = 50;
      tly = 45;
    });
  }
  (function frame() {
    hx += (thx - hx) * 0.06;
    hy += (thy - hy) * 0.06;
    lx += (tlx - lx) * 0.08;
    ly += (tly - ly) * 0.08;
    stageH.style.setProperty('--hx', hx.toFixed(4));
    stageH.style.setProperty('--hy', hy.toFixed(4));
    spot.style.setProperty('--lx', lx.toFixed(2) + '%');
    spot.style.setProperty('--ly', ly.toFixed(2) + '%');
    if (!reduce) requestAnimationFrame(frame);
  })();

  /* ============ PSP -> PSQ STAIRS ============ */
  var stairs = $('#pjStairs');
  function layoutStairs() {
    var svg = $('#pjStLink'),
      path = $('#pjStPath'),
      dots = $('#pjStDots'),
      r = stairs.getBoundingClientRect();
    var a = $('.pj-stair.s1', stairs).getBoundingClientRect(),
      b = $('.pj-stair.s2', stairs).getBoundingClientRect();
    var W = r.width,
      H = r.height;
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    var x1 = a.left - r.left + a.width * 0.5,
      y1 = a.top - r.top,
      x2 = b.left - r.left + b.width * 0.5,
      y2 = b.top - r.top;
    var d =
      'M' +
      x1 +
      ' ' +
      y1 +
      ' C ' +
      x1 +
      ' ' +
      (y1 - 70) +
      ', ' +
      (x2 - 60) +
      ' ' +
      (y2 - 40) +
      ', ' +
      x2 +
      ' ' +
      y2;
    path.setAttribute('d', d);
    $('#pjStPulse').setAttribute('d', d);
    dots.innerHTML = '';
    if (reduce) return;
    for (var k = 0; k < 5; k++) {
      var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      c.setAttribute('r', k % 2 ? 2 : 3);
      var am = document.createElementNS('http://www.w3.org/2000/svg', 'animateMotion');
      am.setAttribute('dur', '2.6s');
      am.setAttribute('repeatCount', 'indefinite');
      am.setAttribute('begin', k * 0.52 + 's');
      am.setAttribute('path', d);
      var op = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
      op.setAttribute('attributeName', 'fill-opacity');
      op.setAttribute('values', '0;1;1;0');
      op.setAttribute('dur', '2.6s');
      op.setAttribute('repeatCount', 'indefinite');
      op.setAttribute('begin', k * 0.52 + 's');
      c.appendChild(am);
      c.appendChild(op);
      dots.appendChild(c);
    }
  }
  $$('.pj-stair', stairs).forEach(function (st) {
    var dir = st.classList.contains('s1') ? 'up' : 'down';
    st.addEventListener('pointerenter', function () {
      stairs.classList.remove('up', 'down');
      void stairs.offsetWidth;
      stairs.classList.add(dir);
    });
    st.addEventListener('pointerleave', function () {
      stairs.classList.remove(dir);
    });
  });
  new IntersectionObserver(
    function (es) {
      if (!es[0].isIntersecting) return;
      stairs.classList.add('in');
      $$('[data-up]', stairs).forEach(function (el, n) {
        var to = +el.dataset.up,
          t0 = performance.now() + n * 500;
        if (reduce) return;
        el.textContent = '0';
        (function tick(t) {
          var k = clamp((t - t0) / 1600, 0, 1);
          el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3)));
          if (k < 1) requestAnimationFrame(tick);
        })(performance.now());
      });
    },
    { threshold: 0.35 },
  ).observe(stairs);

  /* ============ CANVAS ============ */
  function canvasLoop(cv, setup, draw) {
    var ctx = cv.getContext('2d'),
      s = { w: 0, h: 0 },
      vis = false,
      run = false;
    function size() {
      var d = Math.min(window.devicePixelRatio || 1, 2);
      s.w = cv.clientWidth;
      s.h = cv.clientHeight;
      cv.width = Math.max(1, s.w * d);
      cv.height = Math.max(1, s.h * d);
      ctx.setTransform(d, 0, 0, d, 0, 0);
      setup(s);
      draw(ctx, s, performance.now() / 1000);
    }
    function loop(t) {
      if (!vis) {
        run = false;
        return;
      }
      draw(ctx, s, t / 1000);
      requestAnimationFrame(loop);
    }
    new IntersectionObserver(function (es) {
      vis = es[0].isIntersecting;
      if (vis && !run && !reduce) {
        run = true;
        requestAnimationFrame(loop);
      }
    }).observe(cv);
    var rt;
    window.addEventListener('resize', function () {
      clearTimeout(rt);
      rt = setTimeout(size, 160);
    });
    size();
    return { size: size };
  }
  $$('canvas.pj-dust').forEach(function (cv) {
    var ps = [];
    canvasLoop(
      cv,
      function (s) {
        var n = Math.round(Math.min(80, (s.w * s.h) / 16000) * (fine ? 1 : 0.5));
        ps = [];
        for (var i = 0; i < n; i++)
          ps.push({
            x: Math.random() * s.w,
            y: Math.random() * s.h,
            r: 0.5 + Math.random() * 1.5,
            vy: -(0.06 + Math.random() * 0.24),
            vx: (Math.random() - 0.5) * 0.1,
            a: 0.2 + Math.random() * 0.5,
            ph: Math.random() * 6.28,
          });
      },
      function (ctx, s, t) {
        ctx.clearRect(0, 0, s.w, s.h);
        ps.forEach(function (p) {
          p.y += p.vy;
          p.x += p.vx + Math.sin(t * 0.5 + p.ph) * 0.07;
          if (p.y < -10) {
            p.y = s.h + 10;
            p.x = Math.random() * s.w;
          }
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, 6.283);
          ctx.fillStyle = rgba(C.dust, p.a * (0.55 + 0.45 * Math.sin(t * 1.6 + p.ph)));
          ctx.fill();
        });
      },
    );
  });
  $$('canvas[data-chaos], #pjChaos').forEach(function (cv) {
    var ps = [],
      k = cv.id === 'pjChaos' ? 1 : 0.6;
    canvasLoop(
      cv,
      function (s) {
        ps = [];
        var n = Math.round(clamp((s.w * s.h) / 8000, 26, 64));
        for (var i = 0; i < n; i++)
          ps.push({
            x: Math.random() * s.w,
            y: Math.random() * s.h,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
          });
      },
      function (ctx, s) {
        ctx.clearRect(0, 0, s.w, s.h);
        ps.forEach(function (p) {
          p.vx += (Math.random() - 0.5) * 0.6 * k;
          p.vy += (Math.random() - 0.5) * 0.6 * k;
          p.vx *= 0.95;
          p.vy *= 0.95;
          p.x += p.vx * 1.3 * k;
          p.y += p.vy * 1.3 * k;
          if (p.x < 0 || p.x > s.w) p.vx *= -1;
          if (p.y < 0 || p.y > s.h) p.vy *= -1;
          p.x = clamp(p.x, 0, s.w);
          p.y = clamp(p.y, 0, s.h);
        });
        for (var i = 0; i < ps.length; i++)
          for (var j = i + 1; j < ps.length; j++) {
            var a = ps[i],
              b = ps[j],
              d = Math.hypot(a.x - b.x, a.y - b.y);
            if (d < 90) {
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.strokeStyle = rgba(C.goldLight, 0.28 * (1 - d / 90));
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        ps.forEach(function (p) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.6, 0, 6.283);
          ctx.fillStyle = rgba(C.offwhite, 0.55);
          ctx.fill();
        });
      },
    );
  });
  (function () {
    var cv = $('#pjCalm'),
      ps = [],
      lanes = 14;
    canvasLoop(
      cv,
      function (s) {
        ps = [];
        for (var i = 0; i < 56; i++) {
          var lane = i % lanes;
          ps.push({ x: Math.random() * s.w, ly: ((lane + 0.5) / lanes) * s.h, sp: 0.22 + (lane % 3) * 0.07 });
        }
      },
      function (ctx, s) {
        ctx.clearRect(0, 0, s.w, s.h);
        for (var l = 0; l < lanes; l++) {
          var y = ((l + 0.5) / lanes) * s.h;
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(s.w, y);
          ctx.strokeStyle = rgba(C.goldDark, 0.08);
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        ps.forEach(function (p) {
          p.x += p.sp;
          if (p.x > s.w + 20) p.x = -20;
          var g = ctx.createLinearGradient(p.x - 36, 0, p.x, 0);
          g.addColorStop(0, rgba(C.gold, 0));
          g.addColorStop(1, rgba(C.gold, 0.5));
          ctx.beginPath();
          ctx.moveTo(p.x - 36, p.ly);
          ctx.lineTo(p.x, p.ly);
          ctx.strokeStyle = g;
          ctx.lineWidth = 1.2;
          ctx.stroke();
          ctx.beginPath();
          ctx.arc(p.x, p.ly, 1.8, 0, 6.283);
          ctx.fillStyle = rgba(C.goldDark, 0.8);
          ctx.fill();
        });
      },
    );
  })();
  var sky = (function () {
    var cv = $('#pjSky'),
      st2 = [],
      smx = -999,
      smy = -999,
      sml = 0;
    if (fine)
      $('#psq').addEventListener('pointermove', function (e) {
        var r = cv.getBoundingClientRect();
        smx = e.clientX - r.left;
        smy = e.clientY - r.top;
        sml = performance.now();
      });
    return canvasLoop(
      cv,
      function (s) {
        st2 = [];
        var n = Math.round((s.w * s.h) / 4600);
        for (var i = 0; i < n; i++)
          st2.push({
            x: Math.random() * s.w,
            y: Math.random() * s.h * 0.8,
            r: Math.random() < 0.08 ? 1.5 + Math.random() : 0.4 + Math.random() * 0.9,
            ph: Math.random() * 6.28,
            sp: 0.5 + Math.random() * 2,
          });
      },
      function (ctx, s, t) {
        ctx.clearRect(0, 0, s.w, s.h);
        var live = fine && performance.now() - sml < 2500 && smy > 0 && smy < s.h,
          near = [];
        if (live) {
          st2.forEach(function (p) {
            var d = Math.hypot(p.x - smx, p.y - smy);
            if (d < 150) near.push([p, d]);
          });
          near.sort(function (a, b) {
            return a[1] - b[1];
          });
          near = near.slice(0, 9);
          ctx.lineWidth = 0.8;
          for (var i = 0; i < near.length; i++) {
            var a = near[i][0],
              fa = 1 - near[i][1] / 150;
            ctx.beginPath();
            ctx.moveTo(smx, smy);
            ctx.lineTo(a.x, a.y);
            ctx.strokeStyle = rgba(C.goldLight, fa * 0.35);
            ctx.stroke();
            for (var j = i + 1; j < near.length; j++) {
              var b = near[j][0],
                d2 = Math.hypot(a.x - b.x, a.y - b.y);
              if (d2 < 110) {
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.strokeStyle = rgba(C.goldLight, fa * 0.5 * (1 - d2 / 110));
                ctx.stroke();
              }
            }
          }
        }
        st2.forEach(function (p) {
          var a = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(t * p.sp + p.ph)),
            boost = 0;
          if (live) {
            var d = Math.hypot(p.x - smx, p.y - smy);
            if (d < 150) boost = 1 - d / 150;
          }
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r + boost * 1.2, 0, 6.283);
          ctx.fillStyle = rgba(C.star, Math.min(1, a * 0.85 + boost * 0.6));
          ctx.fill();
        });
      },
    );
  })();

  /* ============ PSQ: letters assembled from particles ============ */
  (function () {
    var q = $('#pjQ'),
      cv = $('#pjQC'),
      done = false;
    if (reduce) return;
    q.classList.add('wait');
    function run() {
      if (done) return;
      done = true;
      var ctx = cv.getContext('2d'),
        d = Math.min(window.devicePixelRatio || 1, 2),
        W = cv.clientWidth,
        H = cv.clientHeight;
      cv.width = W * d;
      cv.height = H * d;
      ctx.setTransform(d, 0, 0, d, 0, 0);
      var qr = q.getBoundingClientRect(),
        cr = cv.getBoundingClientRect(),
        cs = getComputedStyle(q);
      var off = document.createElement('canvas');
      off.width = Math.ceil(qr.width);
      off.height = Math.ceil(qr.height);
      var o = off.getContext('2d');
      o.font = cs.fontWeight + ' ' + cs.fontSize + ' ' + cs.fontFamily;
      o.textBaseline = 'alphabetic';
      o.fillStyle = 'black'; /* offscreen mask, never shown */
      var m = o.measureText(q.textContent),
        padL = parseFloat(cs.paddingLeft) || 0;
      var asc = m.fontBoundingBoxAscent || parseFloat(cs.fontSize) * 0.9,
        lh = qr.height - (parseFloat(cs.paddingBottom) || 0);
      var base = (lh - (asc + (m.fontBoundingBoxDescent || parseFloat(cs.fontSize) * 0.25))) / 2 + asc;
      o.fillText(q.textContent, padL, base);
      var data = o.getImageData(0, 0, off.width, off.height).data,
        pts = [],
        step = Math.max(3, Math.round(qr.width / 150));
      for (var y = 0; y < off.height; y += step)
        for (var x = 0; x < off.width; x += step)
          if (data[(y * off.width + x) * 4 + 3] > 128)
            pts.push({ tx: x + qr.left - cr.left, ty: y + qr.top - cr.top });
      pts.forEach(function (p) {
        var a = Math.random() * 6.283,
          r = 100 + Math.random() * Math.max(W, H) * 0.5;
        p.x = W / 2 + Math.cos(a) * r;
        p.y = H / 2 + Math.sin(a) * r * 0.6;
        p.dl = Math.random() * 0.35;
        p.s = 0.8 + Math.random() * 1.3;
      });
      var t0 = performance.now(),
        dur = 1900;
      (function anim(now) {
        var k = (now - t0) / dur;
        ctx.clearRect(0, 0, W, H);
        pts.forEach(function (p) {
          var e = clamp((k - p.dl) / (1 - p.dl), 0, 1);
          e = 1 - Math.pow(1 - e, 3);
          var jx = e < 1 ? (Math.random() - 0.5) * 5 * (1 - e) : 0;
          ctx.beginPath();
          ctx.arc(p.x + (p.tx - p.x) * e + jx, p.y + (p.ty - p.y) * e, p.s, 0, 6.283);
          ctx.fillStyle = rgba(C.particle, 0.4 + 0.6 * e);
          ctx.fill();
        });
        if (k < 1.02) requestAnimationFrame(anim);
        else {
          q.classList.remove('wait');
          cv.style.transition = 'opacity 1s';
          cv.style.opacity = '0';
        }
      })(t0);
    }
    new IntersectionObserver(
      function (es) {
        if (es[0].isIntersecting) {
          var g = function () {
            setTimeout(run, 200);
          };
          if (document.fonts) document.fonts.ready.then(g);
          else g();
        }
      },
      { threshold: 0.6 },
    ).observe(q);
    setTimeout(function () {
      if (!done && q.getBoundingClientRect().top < window.innerHeight) {
        run();
      }
    }, 9000);
  })();

  /* ============ SAR: magnifier lens ============ */
  (function () {
    var fig = $('#pjLens'),
      cv = $('canvas', fig),
      meter = $('#pjMeter'),
      recal = $('#pjRecal'),
      pts = [],
      mx = 0,
      my = 0,
      tx = 0,
      ty = 0,
      R = 110,
      lastMove = -9999,
      t0 = performance.now();
    function point(e) {
      var r = cv.getBoundingClientRect();
      var x = e.clientX - r.left,
        y = e.clientY - r.top;
      if (x >= 0 && y >= 0 && x <= r.width && y <= r.height) {
        tx = x;
        ty = y;
        lastMove = performance.now();
      }
    }
    window.addEventListener('pointermove', point, { passive: true });
    fig.addEventListener('pointerdown', point);
    canvasLoop(
      cv,
      function (s) {
        R = Math.max(80, s.w * 0.2);
        pts = [];
        var n = Math.round((s.w * s.h) / 2300);
        for (var i = 0; i < n; i++)
          pts.push({
            x: 14 + Math.random() * (s.w - 28),
            y: 40 + Math.random() * (s.h - 80),
            r: 0.8 + Math.random() * 1.7,
            glow: 0,
            seen: false,
            star: Math.random() < 0.2,
            ph: Math.random() * 6.28,
          });
        pts.forEach(function (p) {
          p.n = [];
          pts.forEach(function (q) {
            if (q !== p && q.x > p.x && Math.hypot(q.x - p.x, q.y - p.y) < s.w * 0.13) p.n.push(q);
          });
        });
        mx = tx = s.w / 2;
        my = ty = s.h / 2;
      },
      function (ctx, s, t) {
        var now = performance.now();
        if (now - lastMove > 1800) {
          var tt = (now - t0) / 1000;
          tx = s.w / 2 - R * 0.3 + Math.sin(tt * 0.45) * s.w * 0.2;
          ty = s.h / 2 - R * 0.3 + Math.sin(tt * 0.31 + 1) * s.h * 0.18;
        }
        mx += (tx - mx) * 0.14;
        my += (ty - my) * 0.14;
        ctx.clearRect(0, 0, s.w, s.h);
        var seen = 0;
        pts.forEach(function (p) {
          var d = Math.hypot(p.x - mx, p.y - my),
            inside = d < R ? 1 - d / R : 0;
          p.glow = Math.max(p.glow * 0.985, inside);
          if (inside > 0.2) p.seen = true;
          if (p.seen) seen++;
        });
        var frac = pts.length ? seen / pts.length : 0;
        meter.style.setProperty('--seen', Math.min(1, frac / 0.35).toFixed(3));
        if (frac > 0.35) recal.classList.add('lit');
        ctx.lineWidth = 0.8;
        pts.forEach(function (p) {
          if (p.glow < 0.05) return;
          p.n.forEach(function (q) {
            var g = Math.min(p.glow, q.glow);
            if (g < 0.05) return;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = rgba(C.goldLight, g * 0.45);
            ctx.stroke();
          });
        });
        pts.forEach(function (p) {
          var g = p.glow,
            tw = 0.75 + 0.25 * Math.sin(t * 2 + p.ph);
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r + g * (p.star ? 1.5 : 0.7), 0, 6.283);
          if (g > 0.02) {
            ctx.fillStyle = rgba(p.star ? C.starBright : C.goldLight, 0.12 + g * 0.88 * tw);
            ctx.shadowBlur = 12 * g;
            ctx.shadowColor = rgba(C.glow, 0.9);
          } else {
            ctx.fillStyle = p.seen ? rgba(C.goldLight, 0.22) : rgba(C.dim, 0.16);
            ctx.shadowBlur = 0;
          }
          ctx.fill();
        });
        ctx.shadowBlur = 0;
        var lg = ctx.createRadialGradient(mx, my, 0, mx, my, R);
        lg.addColorStop(0, rgba(C.goldLight, 0.12));
        lg.addColorStop(1, rgba(C.goldLight, 0));
        ctx.fillStyle = lg;
        ctx.beginPath();
        ctx.arc(mx, my, R, 0, 6.283);
        ctx.fill();
        /* lens rim */
        ctx.beginPath();
        ctx.arc(mx, my, R, 0, 6.283);
        ctx.strokeStyle = rgba(C.gold, 0.95);
        ctx.lineWidth = Math.max(4, R * 0.055);
        ctx.shadowBlur = 14;
        ctx.shadowColor = rgba(C.goldLight, 0.45);
        ctx.stroke();
        ctx.shadowBlur = 0;
        ctx.beginPath();
        ctx.arc(mx, my, R - Math.max(2, R * 0.028), 0, 6.283);
        ctx.strokeStyle = rgba(C.rim, 0.55);
        ctx.lineWidth = 1;
        ctx.stroke();
        /* glass reflection */
        ctx.beginPath();
        ctx.arc(mx, my, R * 0.78, Math.PI * 1.08, Math.PI * 1.42);
        ctx.strokeStyle = rgba(C.shine, 0.45);
        ctx.lineWidth = Math.max(2, R * 0.03);
        ctx.lineCap = 'round';
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(mx, my, R * 0.66, Math.PI * 1.18, Math.PI * 1.26);
        ctx.strokeStyle = rgba(C.shine, 0.3);
        ctx.stroke();
        /* handle */
        var ca = Math.PI / 4,
          hx = mx + Math.cos(ca) * (R + 2),
          hy = my + Math.sin(ca) * (R + 2),
          hl = R * 0.95,
          hw = Math.max(9, R * 0.16);
        ctx.save();
        ctx.translate(hx, hy);
        ctx.rotate(ca);
        ctx.fillStyle = rgba(C.gold, 1);
        ctx.fillRect(0, -hw * 0.32, R * 0.16, hw * 0.64);
        var hg = ctx.createLinearGradient(0, -hw / 2, 0, hw / 2);
        hg.addColorStop(0, 'rgb(' + C.handleTop + ')');
        hg.addColorStop(0.35, 'rgb(' + C.handleMid + ')');
        hg.addColorStop(1, 'rgb(' + C.handleBottom + ')');
        ctx.beginPath();
        ctx.moveTo(R * 0.16, -hw / 2);
        ctx.lineTo(R * 0.16 + hl - hw / 2, -hw / 2);
        ctx.arc(R * 0.16 + hl - hw / 2, 0, hw / 2, -Math.PI / 2, Math.PI / 2);
        ctx.lineTo(R * 0.16, hw / 2);
        ctx.closePath();
        ctx.fillStyle = hg;
        ctx.fill();
        ctx.strokeStyle = rgba(C.gold, 0.8);
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(R * 0.22, -hw * 0.22);
        ctx.lineTo(R * 0.16 + hl - hw * 0.8, -hw * 0.22);
        ctx.strokeStyle = rgba(C.goldLight, 0.35);
        ctx.lineWidth = 1.2;
        ctx.stroke();
        ctx.restore();
        ctx.lineCap = 'butt';
      },
    );
  })();

  /* ============ SIX FACULTIES DIAL ============ */
  (function () {
    var dial = $('#pjDial'),
      hand = $('#pjHand'),
      chords = $('#pjChords'),
      NS = 'http://www.w3.org/2000/svg';
    var names = (dial.dataset.labels || '').split('|'),
      labels = [],
      lines = [],
      k = 0,
      rot = 0,
      timer = null;
    var ang = names.map(function (_, i) {
      return -90 + i * 60;
    });
    names.forEach(function (n, i) {
      var a = (ang[i] * Math.PI) / 180,
        el = document.createElement('span');
      el.className = 'pj-fac';
      el.textContent = n;
      var cx = Math.cos(a),
        cy = Math.sin(a);
      el.style.left = 'calc(50% + ' + cx.toFixed(4) + ' * var(--L))';
      el.style.top = 'calc(50% + ' + cy.toFixed(4) + ' * var(--L))';
      el.classList.add(Math.abs(cx) < 0.2 ? 'c' : cx > 0 ? 'r' : 'l');
      if (Math.abs(cx) < 0.2 && cy > 0) el.classList.add('b');
      dial.appendChild(el);
      labels.push(el);
      var p1 = [50 + Math.cos(a) * 30, 50 + Math.sin(a) * 30],
        a2 = (ang[(i + 1) % 6] * Math.PI) / 180,
        p2 = [50 + Math.cos(a2) * 30, 50 + Math.sin(a2) * 30];
      var l = document.createElementNS(NS, 'line');
      l.setAttribute('x1', p1[0]);
      l.setAttribute('y1', p1[1]);
      l.setAttribute('x2', p2[0]);
      l.setAttribute('y2', p2[1]);
      l.setAttribute('class', 'chord');
      l.setAttribute('pathLength', '1');
      chords.appendChild(l);
      lines.push(l);
      var dot = document.createElementNS(NS, 'circle');
      dot.setAttribute('cx', p1[0]);
      dot.setAttribute('cy', p1[1]);
      dot.setAttribute('r', '.9');
      dot.style.fill = rgba(C.goldLight, 0.6);
      chords.appendChild(dot);
    });
    function step() {
      var i = k % 7;
      if (i === 6) {
        labels.forEach(function (l) {
          l.classList.add('on');
        });
        lines.forEach(function (l) {
          l.classList.add('on');
        });
      } else {
        if (i === 0) {
          labels.forEach(function (l) {
            l.classList.remove('on');
          });
          lines.forEach(function (l) {
            l.classList.remove('on');
          });
        }
        rot = Math.floor(k / 7) * 360 + i * 60;
        hand.style.transform = 'rotate(' + rot + 'deg)';
        labels[i].classList.add('on');
        if (i > 0) lines[i - 1].classList.add('on');
        if (i === 5) lines[5].classList.add('on');
      }
      k++;
    }
    if (reduce) {
      labels.forEach(function (l) {
        l.classList.add('on');
      });
      lines.forEach(function (l) {
        l.classList.add('on');
      });
      return;
    }
    new IntersectionObserver(
      function (es) {
        if (es[0].isIntersecting && !timer) {
          step();
          timer = setInterval(step, 1300);
        } else if (!es[0].isIntersecting && timer) {
          clearInterval(timer);
          timer = null;
        }
      },
      { threshold: 0.35 },
    ).observe(dial);
  })();

  /* ============ VAULT DOOR ============ */
  var door = $('#pjDoor');
  (function () {
    var g = $('#pjBolts'),
      NS = 'http://www.w3.org/2000/svg';
    for (var i = 0; i < 12; i++) {
      var a = (i / 12) * Math.PI * 2,
        x = 200 + Math.cos(a) * 168,
        y = 200 + Math.sin(a) * 168,
        r = document.createElementNS(NS, 'rect');
      r.setAttribute('x', x - 6);
      r.setAttribute('y', y - 6);
      r.setAttribute('width', 12);
      r.setAttribute('height', 12);
      r.setAttribute('rx', 3);
      r.style.fill = 'var(--color-gold)';
      r.setAttribute('class', 'bolt');
      r.style.setProperty('--bx', (-Math.cos(a) * 16).toFixed(1) + 'px');
      r.style.setProperty('--by', (-Math.sin(a) * 16).toFixed(1) + 'px');
      r.setAttribute('transform', 'rotate(' + (a * 180) / Math.PI + ' ' + x + ' ' + y + ')');
      g.appendChild(r);
    }
  })();

  /* ============ REDACTION BARS ============ */
  var bars = [];
  var barsDone = false;
  function buildBars() {
    bars.forEach(function (b) {
      b.remove();
    });
    bars = [];
    if (reduce || barsDone) return;
    $$('#pjRedact p').forEach(function (p) {
      var range = document.createRange();
      range.selectNodeContents(p);
      var pr = p.getBoundingClientRect(),
        rects = [].slice.call(range.getClientRects()),
        lines = [];
      rects.forEach(function (r) {
        if (r.width < 2) return;
        var L = lines[lines.length - 1];
        if (L && Math.abs(L.top - r.top) < r.height * 0.5) {
          L.left = Math.min(L.left, r.left);
          L.right = Math.max(L.right, r.right);
        } else lines.push({ top: r.top, left: r.left, right: r.right, h: r.height });
      });
      lines.forEach(function (L) {
        var b = document.createElement('span');
        b.className = 'pj-bar';
        var hh = L.h * 0.8;
        b.style.left = L.left - pr.left - 3 + 'px';
        b.style.width = L.right - L.left + 6 + 'px';
        b.style.top = L.top - pr.top + (L.h - hh) / 2 + 'px';
        b.style.height = hh + 'px';
        p.appendChild(b);
        bars.push(b);
      });
    });
  }

  /* ============ "+200" MADE OF DOTS ============ */
  (function () {
    var cv = $('#pjDots'),
      done = false;
    function run() {
      if (done) return;
      done = true;
      var ctx = cv.getContext('2d'),
        d = Math.min(window.devicePixelRatio || 1, 2),
        W = cv.clientWidth,
        H = cv.clientHeight;
      cv.width = W * d;
      cv.height = H * d;
      ctx.setTransform(d, 0, 0, d, 0, 0);
      var off = document.createElement('canvas');
      off.width = Math.ceil(W);
      off.height = Math.ceil(H);
      var label = cv.dataset.text || '',
        font = '500 ' + Math.round(H * 0.9) + 'px ' + FONT_SERIF,
        o = off.getContext('2d');
      o.font = font;
      o.textBaseline = 'middle';
      o.fillText(label, 2, H * 0.54);
      var data = o.getImageData(0, 0, off.width, off.height).data,
        all = [];
      for (var y = 0; y < off.height; y += 2)
        for (var x = 0; x < off.width; x += 2) if (data[(y * off.width + x) * 4 + 3] > 140) all.push([x, y]);
      var pts = [],
        stepI = all.length / 200;
      for (var i = 0; i < 200 && all.length; i++) {
        var pt = all[Math.floor(i * stepI)];
        pts.push({
          tx: pt[0],
          ty: pt[1],
          x: Math.random() * W,
          y: H + 20 + Math.random() * 60,
          dl: Math.random() * 0.5,
        });
      }
      var t0 = performance.now(),
        dur = 2200;
      (function anim(now) {
        var k = (now - t0) / dur,
          sf = clamp((k - 0.95) / 0.45, 0, 1);
        sf = sf * sf * (3 - 2 * sf);
        ctx.clearRect(0, 0, W, H);
        pts.forEach(function (p) {
          var e = clamp((k - p.dl) / (1 - p.dl), 0, 1);
          e = 1 - Math.pow(1 - e, 3);
          ctx.beginPath();
          ctx.arc(p.x + (p.tx - p.x) * e, p.y + (p.ty - p.y) * e, Math.max(1.4, H / 50), 0, 6.283);
          ctx.fillStyle =
            'rgba(' + (e > 0.98 ? C.gold : C.goldDark) + ',' + (0.35 + 0.65 * e) * (1 - sf) + ')';
          ctx.fill();
        });
        if (sf > 0) {
          ctx.save();
          ctx.globalAlpha = sf;
          ctx.font = font;
          ctx.textBaseline = 'middle';
          var gr = ctx.createLinearGradient(0, 0, 0, H);
          gr.addColorStop(0, 'rgb(' + C.goldSoft + ')');
          gr.addColorStop(0.55, 'rgb(' + C.gold + ')');
          gr.addColorStop(1, 'rgb(' + C.goldDark + ')');
          ctx.fillStyle = gr;
          ctx.fillText(label, 2, H * 0.54);
          ctx.restore();
        }
        if (k < 1.5) requestAnimationFrame(anim);
      })(t0);
    }
    if (reduce) {
      run();
      return;
    }
    new IntersectionObserver(
      function (es) {
        if (es[0].isIntersecting) {
          if (document.fonts) document.fonts.ready.then(run);
          else run();
        }
      },
      { threshold: 0.6 },
    ).observe(cv);
  })();

  /* ============ SCROLL ============ */
  var bar = $('#pjProgress'),
    darkEls = $$('.pj-dark'),
    psqHead = $('#pjPsqHead'),
    psqLede = $('#pjPsqLede');
  var bridge = $('#pjBridge i'),
    vault = $('#blindagem'),
    trail = $('#pjTrail'),
    steps = $$('.pj-step', trail),
    fin = $('#aplicacao'),
    bioStick = $('#pjBioStick');
  var chapters = $$('[data-ch]'),
    chN = $('#pjChN'),
    chBar = $('#pjChBar'),
    chEl = $('#pjChapter'),
    ticking = false;
  function onScroll() {
    var vh = window.innerHeight,
      y = window.scrollY,
      H = maxScroll();
    bar.style.transform = 'scaleX(' + (H > 0 ? y / H : 0) + ')';
    var dark = darkEls.some(function (d) {
      var r = d.getBoundingClientRect();
      return r.top + 60 < 50 && r.bottom - 60 > 50;
    });
    var pr = psqHead.getBoundingClientRect();
    if (pr.top < 60 && $('#pjSar').getBoundingClientRect().top > 160) dark = true;
    if (!fine && !reduce) {
      thy = clamp(y / vh, 0, 1) * -1.4;
    }

    var fr = fin.getBoundingClientRect();

    var idx = 0;
    chapters.forEach(function (c, i) {
      if (c.getBoundingClientRect().top < vh * 0.5) idx = i;
    });
    chN.textContent = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'][idx] || '';
    var cr = chapters[idx].getBoundingClientRect();
    chBar.style.setProperty('--cp', clamp((vh * 0.5 - cr.top) / cr.height, 0, 1).toFixed(3));
    chEl.classList.toggle('on', y > vh * 0.5 && fr.top > vh * 0.3);
    ticking = false;
  }
  function shutBolts(bolts) {
    var t0 = performance.now();
    bolts.forEach(function (b) {
      b.dataset.base = b.dataset.base || b.getAttribute('transform') || '';
    });
    (function go(t) {
      var k = clamp((t - t0) / 700, 0, 1),
        e = k < 1 ? 1 - Math.pow(1 - k, 3) * (1 - 2.2 * k * (1 - k)) : 1;
      bolts.forEach(function (b) {
        var bx = parseFloat(b.style.getPropertyValue('--bx')) || 0,
          by = parseFloat(b.style.getPropertyValue('--by')) || 0;
        b.setAttribute(
          'transform',
          'translate(' + (bx * e).toFixed(2) + ' ' + (by * e).toFixed(2) + ') ' + b.dataset.base,
        );
      });
      if (k < 1) requestAnimationFrame(go);
    })(t0);
  }
  /* layered bio photo */
  (function () {
    var st = $('#pjBioStick');
    if (!fine || reduce || !st) return;
    var tx = 0,
      ty = 0,
      x = 0,
      y = 0,
      on = false;
    st.addEventListener('pointermove', function (e) {
      var r = st.getBoundingClientRect();
      tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
      if (!on) {
        on = true;
        requestAnimationFrame(f);
      }
    });
    st.addEventListener('pointerleave', function () {
      tx = 0;
      ty = 0;
    });
    function f() {
      x += (tx - x) * 0.08;
      y += (ty - y) * 0.08;
      st.style.setProperty('--px', x.toFixed(4));
      st.style.setProperty('--py', y.toFixed(4));
      if (Math.abs(tx - x) + Math.abs(ty - y) > 0.002 || tx || ty) requestAnimationFrame(f);
      else on = false;
    }
  })();
  /* triggers when elements come into view */
  function onSeen(el, fn, opt) {
    if (!el) return;
    var o = new IntersectionObserver(
      function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) {
            fn(e.target);
            o.unobserve(e.target);
          }
        });
      },
      opt || { threshold: 0.35 },
    );
    o.observe(el);
  }
  onSeen(
    bridge,
    function () {
      bridge.style.setProperty('--p', 1);
    },
    { threshold: 0.2 },
  );
  onSeen(
    door,
    function () {
      if (reduce) {
        door.classList.add('shut', 'boom');
        shutBolts($$('.bolt', door));
        return;
      }
      var t0 = performance.now();
      var wheel = $('.wheel', door),
        bolts = $$('.bolt', door);
      (function spin(t) {
        var k = clamp((t - t0) / 2200, 0, 1),
          e = 1 - Math.pow(1 - k, 3);
        wheel.setAttribute('transform', 'rotate(' + (e * 540).toFixed(1) + ' 200 200)');
        if (k < 1) requestAnimationFrame(spin);
        else {
          door.classList.add('shut', 'boom');
          shutBolts(bolts);
        }
      })(t0);
    },
    { threshold: 0.45 },
  );
  onSeen(
    $('#pjRedact'),
    function () {
      var i = 0;
      (function next() {
        if (i < bars.length) {
          bars[i].classList.add('off');
          i++;
          setTimeout(next, 260);
        } else {
          barsDone = true;
          setTimeout(function () {
            bars.forEach(function (b) {
              b.remove();
            });
            bars = [];
          }, 1600);
        }
      })();
    },
    { threshold: 0.3 },
  );
  steps.forEach(function (st) {
    onSeen(
      st,
      function () {
        st.classList.add('on');
        var n = steps.filter(function (x) {
          return x.classList.contains('on');
        }).length;
        trail.style.setProperty('--p', (n / steps.length).toFixed(3));
      },
      { threshold: 0.4 },
    );
  });
  if (reduce) {
    steps.forEach(function (x) {
      x.classList.add('on');
    });
    trail.style.setProperty('--p', 1);
  }

  function layout() {
    var sar = $('#pjSar'),
      psq = $('#psq'),
      pt = psq.getBoundingClientRect().top;
    var n1 = psqLede.getBoundingClientRect().bottom - pt + 30,
      n2 = sar.getBoundingClientRect().top - pt - 30;
    psq.style.setProperty('--n1', n1 + 'px');
    psq.style.setProperty('--n2', n1 + (n2 - n1) * 0.45 + 'px');
    psq.style.setProperty('--n3', n2 + 'px');
    $('#pjSkyBox').style.height = n2 + 'px';
    sky.size();
    var so = strikeOn;
    buildStrikes();
    buildBars();
    strikeOn = null;
    if (so) setStrikes(true);
    layoutStairs();
    sizeBorders();
    onScroll();
  }
  window.addEventListener(
    'scroll',
    function () {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(onScroll);
      }
    },
    { passive: true },
  );
  var lt,
    lastW = window.innerWidth;
  window.addEventListener('resize', function () {
    if (window.innerWidth === lastW) return;
    lastW = window.innerWidth;
    clearTimeout(lt);
    lt = setTimeout(layout, 150);
  });
  layout();
  if (document.fonts && document.fonts.ready)
    document.fonts.ready.then(function () {
      setTimeout(layout, 60);
    });
  window.addEventListener('load', function () {
    setTimeout(layout, 120);
  });

  initFaq();
}

function initFaq() {
  var items = document.querySelectorAll('#perguntas .pj-faq-item');
  var motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  [].forEach.call(items, function (item) {
    var summary = item.querySelector('summary');
    var animation = null,
      targetOpen = item.open;
    function clearState() {
      item.classList.remove('is-opening', 'is-closing');
      item.style.overflow = '';
    }
    function settle() {
      if (animation) {
        animation.cancel();
        animation = null;
      }
      item.open = targetOpen;
      clearState();
    }
    summary.addEventListener('click', function (event) {
      if (typeof item.animate !== 'function') return;
      event.preventDefault();
      var from = item.getBoundingClientRect().height;
      targetOpen = animation ? !targetOpen : !item.open;
      if (animation) {
        animation.cancel();
        animation = null;
      }
      clearState();
      if (motion.matches) {
        item.open = targetOpen;
        return;
      }
      if (targetOpen) item.open = true;
      var border = parseFloat(getComputedStyle(item).borderBottomWidth) || 0;
      var to = targetOpen
        ? item.getBoundingClientRect().height
        : summary.getBoundingClientRect().height + border;
      item.style.overflow = 'hidden';
      item.classList.add(targetOpen ? 'is-opening' : 'is-closing');
      var current = item.animate([{ height: from + 'px' }, { height: to + 'px' }], {
        duration: 420,
        easing: 'cubic-bezier(.22,.8,.2,1)',
      });
      animation = current;
      current.onfinish = function () {
        if (animation !== current) return;
        item.open = targetOpen;
        animation = null;
        clearState();
      };
    });
    // A width change can re-wrap the text mid-animation, so settle it.
    window.addEventListener('resize', function () {
      if (animation) settle();
    });
    if (motion.addEventListener)
      motion.addEventListener('change', function () {
        if (animation) settle();
      });
  });
}
