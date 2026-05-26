  // TRANSLATION DICTIONARY (BILINGUAL DICTIONARY MATRIX)
  let currentLang = 'en';

  const translations = {
    en: {
      "header-desc": "EMBEDDED HARDWARE CONTRACTING CELL // SYSTEM ARCHITECTURE BUS",
      "sys-bus-link-status": "<span class='w-1.5 h-1.5 bg-[#00ff66] rounded-full inline-block animate-pulse'></span> IMPEDANCE_MATCHED",
      "nav-register-label": "SYSTEM_BUS_ROUTING_REGISTER",
      "nav-gateway": "[0x00] CORE_GATEWAY",
      "nav-identity": "[0x01] ORG_IDENTITY",
      "nav-directory": "[0x02] HW_DIRECTORY",
      "nav-uplink": "[0x03] SECURE_UPLINK",

      // GATEWAY
      "gateway-matrix-prefix": "[!] HARDWARE VALIDATION MATRIX",
      "gateway-matrix-suffix": "REGISTER ADDR_0x00 ONLINE",
      "gateway-hero-title": "Architecting safe silicon logic for mission-critical medical & laboratory environments.",
      "gateway-hero-desc": "We are elite electronic engineering contractors specializing in the end-to-end design, testing, and production optimization of multi-layer controller boards. Our team does not build consumer hardware; we develop the vital brain components (harnessing safe, bare-metal Rust firmware) for original equipment manufacturers (OEMs) producing precision temperature-controlled health incubators, food-safety diagnostic ovens, and high-RPM mixing engines.",
      "spec-label-thermal": "THERMO_MATRIX",
      "spec-val-thermal": "0.0001°C RESOLUTION",
      "spec-desc-thermal": "> Multi-channel cold-junction",
      "spec-label-velocity": "VELOCITY_VECTOR",
      "spec-val-velocity": "3-PHASE SENSORLESS FOC",
      "spec-desc-velocity": "> Closed-loop torque profiling",
      "spec-label-isolation": "ISOLATION_BARRIER",
      "spec-val-isolation": "GALVANIC ISOLATION 3.75kV",
      "spec-desc-isolation": "> IEC 60601-1 Medical compliant",

      // SUMMARY ACCORDION
      "summary-header": "HARDWARE SUMMARY",
      "summary-subheader": "Expand standard architecture pipelines:",
      "summary-cap1-title": "[REG_01] HIGH-DENSITY INTERCONNECT",
      "summary-cap1-desc": "Multi-layer high frequency PCB development (up to 12 layers) with micro-vias, blind/buried pathways, and controlled trace impedance preventing high-frequency cross-talk.",
      "summary-cap2-title": "[REG_02] EMBEDDED RUST FIRMWARE",
      "summary-cap2-desc": "Bare-metal embedded Rust configurations. Complete memory protection vectors with zero runtime memory manager (no_std architecture), mitigating race conditions.",
      "summary-cap3-title": "[REG_03] HARSH ENVIRONMENT TESTING",
      "summary-cap3-desc": "Simulating load failures, heat dissipation profiles, and hardware-in-the-loop validation using custom signal simulation equipment designed directly in-house.",

      // SYSTEM ARCHITECTURE FLOWS
      "flows-header": "SYSTEM ARCHITECTURE FLOWS",
      "flows-desc": "Click hardware nodes below to execute diagnostic address switching.",
      "flows-btn1": "ORGANIZATIONAL LAB",
      "flows-btn1-sub": "> Core design protocols",
      "flows-btn2": "PROPRIETARY PRODUCTS",
      "flows-btn2-sub": "> Technical datasheets",
      "flows-btn3": "SECURE CONNECTIONS",
      "flows-btn3-sub": "> Fast contracting bus",

      // ABOUT
      "about-hero-header": "DETERMINISTIC SECURITY & SAFETY BY DESIGN",
      "about-hero-body": `
                    <p>In high-stakes laboratory and medical hardware, firmware failure is not a minor inconvenience—it is a catastrophic risk. If an incubator's temperature variance spikes during stem-cell cultivation or if a mixer engine exceeds safety speed thresholds, entire pipelines fail and research is destroyed.</p>
                    <p>At Micromed, we mitigate these vectors using **Deterministic Design Engineering**. Our hardware relies on mathematical guarantees. By using bare-metal, no_std **Rust systems-programming architecture**, we eliminate memory allocation leaks, race conditions, and undefined behavior at compile-time.</p>
                    <p>Our boards run without a heavyweight operating system layer (no Windows, no Linux). Instead, they utilize robust Real-Time Interrupt Driven Concurrency (RTIC) task managers to interface directly with ARM Cortex-M processors.</p>
                `,
      "about-codes-header": "THE MICROMED COMPLIANCE CODES:",
      "about-codes-1": "✓ Complete lack of garbage-collector latency vectors.",
      "about-codes-2": "✓ Strict zero-cost hardware boundary abstractions.",
      "about-codes-3": "✓ Full galvanic isolation separation standards across all sensitive buses.",
      "about-team-title": "TEAM METASTATE BLUEPRINT",
      "about-team-desc": "Like an integrated circuit, our organizational architecture operates via synchronized, deterministic processing blocks. Click any functional group node below to interrogate credentials.",
      "team-cell-1": "[CELL_01]: SILICON_DESIGN_NODE",
      "team-cell-2": "[CELL_02]: EMBEDDED_RUST_CORE",
      "team-cell-3": "[CELL_03]: HIL_STRESS_VALIDATION",
      "team-read-specs-btn": "READ SPECS ►",
      "team-readout-placeholder": "Select an organizational cell above to map team pipelines, technical credentials, and active system operations.",

      // TEAM SPECIFIC INFOS
      "team-silicon-title": "CELL_01: SILICON_DESIGN_NODE",
      "team-silicon-desc": "Lead Hardware Architects managing spatial optimization profiles, high-frequency trace routing, galvanic isolation pathways, and multi-layer stack parameters (up to 12 layers) matching extreme environmental medical standards.",
      "team-firmware-title": "CELL_02: EMBEDDED_RUST_CORE",
      "team-firmware-desc": "Systems level engineers implementing uncompromised, bare-metal Rust configurations with zero-cost bounds wrappers. No heap managers, completely deterministic task dispatchers preventing CPU lag during physical critical events.",
      "team-validation-title": "CELL_03: HIL_STRESS_VALIDATION",
      "team-validation-desc": "HIL (Hardware-In-The-Loop) design specialists simulating sensor feedback inputs, sudden motor lockouts, environmental overload thresholds, and voltage oscillations on test rigs built entirely in-house.",

      // DIRECTORY
      "dir-spec-title": "SPEC_REGISTERS",
      "dir-spec-desc": "Query proprietary Micromed hardware blueprints. Select a model register to output high-fidelity data sheets directly from our firmware files:",
      "dir-status-active": "[ ACTIVE ]",
      "dir-status-locked": "[ LOCKED ]",

      // UPLINK
      "uplink-title": "SECURE HARDWARE HANDSHAKE",
      "uplink-desc": "Procurement managers and technical system architects can initiate a direct data bus uplink to request hardware contracting or embedded firmware optimization projects.",
      "uplink-params-header": "ACTIVE TRANSMITTER CHANNEL PARAMS:",
      "uplink-params-1": "✓ CONFIG: PGP COMPLIANT ENCRYPTION MATRIX",
      "uplink-params-2": "✓ SCHEMATIC DISPATCH TIMELINE: < 24 HOURS",
      "uplink-params-3": "✓ TECHNICAL ACCESS CLEARANCE: LEVEL_4 APPROVED",
      "form-label-company": "OEM_COMPANY_IDENTIFIER",
      "form-label-email": "SECURE_COM_ROUTING",
      "form-label-specs": "BOARD_SPECS_AND_TELEMETRY_PARAMETERS",
      "form-submit-btn": "ESTABLISH DATA BUS MATRIX //",
      "success-headline": "UPLINK PACKET DEPLOYED [🟢]",
      "success-log-1": "> Initiating RSA handshakes (MM-4096-B)... SUCCESS",
      "success-log-2": "> Compiling specifications block... COMPLETED",
      "success-log-3": "> Routing telemetry packets: IP_COM_SECURED",
      "success-log-4": "> Data bus written to memory array blocks.",
      "success-desc": "Hardware contracting packet received successfully. A systems engineering contractor stands notified to analyze physical parameters.",
      "success-dismiss": "[ CLEAR_LOG_REGISTERS ]",

      // FOOTER
      "footer-text": "MICROMED TECHNOLOGY SYSTEMS // CORE MEMORY REG REGISTERS OPERATIONAL",
      "footer-metric": "TRACE_SENSITIVITY: HI-FI"
    },
    fa: {
      "header-desc": "واحد توسعه سخت‌افزار نهفته // گذرگاه معماری سیستم",
      "sys-bus-link-status": "<span class='w-1.5 h-1.5 bg-[#00ff66] rounded-full inline-block animate-pulse'></span> انطباق امپدانس برقرار است",
      "nav-register-label": "ثبات_مسیریابی_گذرگاه_سیستم",
      "nav-gateway": "[0x00] درگاه_اصلی_سیستم",
      "nav-identity": "[0x01] هویت_سازمانی",
      "nav-directory": "[0x02] کاتالوگ_سخت‌افزار",
      "nav-uplink": "[0x03] اتصال_امن_سیستم",

      // GATEWAY
      "gateway-matrix-prefix": "[!] ماتریس اعتبارسنجی سخت‌افزاری",
      "gateway-matrix-suffix": "ثبات آدرس 0x00 فعال شد",
      "gateway-hero-title": "طراحی مدارهای سیلیکونی ایمن برای تجهیزات حساس پزشکی و آزمایشگاهی.",
      "gateway-hero-desc": "ما تیمی نخبه از پیمانکاران مهندسی الکترونیک هستیم که در طراحی صفر تا صد، شبیه‌سازی سیگنال، و بهینه‌سازی تولید مبردهای پیشرفته تخصص داریم. تیم ما دستگاه نهایی تولید نمی‌کند؛ بلکه ما مغز پردازشی سیستم (مجهز به سیستم‌عامل‌های سخت‌افزارمحور Rust) را برای سازندگان تجهیزات آزمایشگاهی، انکوباتورهای رشد سلول، و میکسر‌های دور بالا طراحی و پیاده‌سازی می‌نماییم.",
      "spec-label-thermal": "ماتریس_دما_سنجی",
      "spec-val-thermal": "دقت فرکانسی ۰.۰۰۰۱ درجه",
      "spec-desc-thermal": "> سنسور دما چند کاناله",
      "spec-label-velocity": "بردار_سرعت_میکسر",
      "spec-val-velocity": "سیستم کنترل برداری ۳ فاز سنسورلس",
      "spec-desc-velocity": "> مانیتورینگ گشتاور مداربسته",
      "spec-label-isolation": "مانع_ایزولاسیون_فرکانسی",
      "spec-val-isolation": "ایزولاسیون گالوانیک ۳.۷۵ کیلو ولت",
      "spec-desc-isolation": "> استاندارد پزشکی IEC 60601-1",

      // SUMMARY ACCORDION
      "summary-header": "خلاصه وضعیت سیستم",
      "summary-subheader": "گسترش بردارهای ساختاری سخت‌افزار:",
      "summary-cap1-title": "[REG_01] اتصالات با چگالی بالا (HDI)",
      "summary-cap1-desc": "طراحی بردهای مدار چاپی فرکانس بالا چند لایه (تا ۱۲ لایه) به همراه میکروویاها و مسیرهای مدفون جهت جلوگیری از تداخل نویز مغناطیسی.",
      "summary-cap2-title": "[REG_02] میان‌افزار سخت‌افزاری Rust",
      "summary-cap2-desc": "توسعه کدهای سیستم‌عامل به صورت مستقیم روی سخت‌افزار با فریمورک Rust بدون سیستم زباله‌روب جهت جلوگیری کامل از وقفه در عملکرد سیستم.",
      "summary-cap3-title": "[REG_03] آزمایش‌های شرایط محیطی سخت",
      "summary-cap3-desc": "شبیه‌سازی خطاهای بار الکتریکی، فرآیندهای اتلاف حرارت، و انجام تست‌های سخت‌افزاری (HIL) با سیستم‌های تست اختصاصی طراحی شده در میکرومد.",

      // SYSTEM ARCHITECTURE FLOWS
      "flows-header": "جریان معماری مدارهای سیستم",
      "flows-desc": "برای تغییر آدرس‌های عیب‌یابی بر روی گره‌های سخت‌افزاری زیر کلیک کنید.",
      "flows-btn1": "آزمایشگاه سازمانی",
      "flows-btn1-sub": "> کدهای استاندارد پایه",
      "flows-btn2": "محصولات اختصاصی",
      "flows-btn2-sub": "> مشخصات فنی قطعات",
      "flows-btn3": "اتصال به شبکه ارتباطات",
      "flows-btn3-sub": "> درگاه سریع عقد قرارداد",

      // ABOUT
      "about-hero-header": "امنیت و ایمنی ذاتی در طراحی",
      "about-hero-body": `
                    <p>در تجهیزات حساس آزمایشگاهی و پزشکی، خرابی نرم‌افزاری یا میان‌افزاری صرفاً یک ایراد ساده نیست، بلکه یک فاجعه ساختاری است. نوسان دما در انکوباتور در زمان رشد سلول‌های بنیادی یا تجاوز سرعت موتور میکسر از حد ایمنی، تحقیقات کلان و نمونه‌های حیاتی را نابود می‌کند.</p>
                    <p>ما در میکرومد با استفاده از **مهندسی طراحی دترمینستیک** جلوی این ریسک‌ها را می‌گیریم. سخت‌افزار ما با ضمانت‌های ریاضیاتی کار می‌کند. با بکارگیری زبان برنامه‌نویسی سطح‌پایین **Rust بدون هیچ‌گونه سیستم مدیریت حافظه جانبی**، احتمال نشت حافظه و رفتارهای نامشخص سیستم در زمان کامپایل کاملاً از بین می‌رود.</p>
                    <p>بردهای الکترونیکی ما بدون سیستم‌عامل‌های سنگین کار می‌کنند. در عوض، آن‌ها از مدیران فرآیند بلادرنگ و سریع (RTIC) جهت مدیریت بهینه پردازنده‌های ARM Cortex-M بهره می‌برند.</p>
                `,
      "about-codes-header": "استاندارد‌های سازگاری میکرومد:",
      "about-codes-1": "✓ عدم نیاز به مفسر یا موتورهای پاکسازی سنگین.",
      "about-codes-2": "✓ بهینه‌سازی کدهای سخت‌افزاری بدون تحمیل پردازش اضافی.",
      "about-codes-3": "✓ تفکیک گالوانیک کامل برای ورودی سنسورهای بسیار حساس.",
      "about-team-title": "نقشه راه ارتباطی اعضای تیم",
      "about-team-desc": "مانند یک مدار مجتمع، ساختار سازمانی ما بر اساس واحدهای پردازشی هماهنگ و دقیق عمل می‌کند. برای مشاهده مهارت‌های هر بخش روی گره‌ها کلیک کنید.",
      "team-cell-1": "[CELL_01]: واحد طراحی و جانمایی سیلیکون",
      "team-cell-2": "[CELL_02]: مهندسی هسته میان‌افزار Rust",
      "team-cell-3": "[CELL_03]: واحد اعتبارسنجی و شبیه‌سازی HIL",
      "team-read-specs-btn": "مشاهده جزییات تخصصی ►",
      "team-readout-placeholder": "جهت دریافت جزییات تیم فنی، بر روی یکی از سلول‌های سخت‌افزاری بالا کلیک کنید.",

      // TEAM SPECIFIC INFOS
      "team-silicon-title": "واحد طراحی سیلیکون و برد چاپی",
      "team-silicon-desc": "معماران ارشد سخت‌افزاری با تخصص بالا در بهینه‌سازی فضایی لایه‌های مدارات چاپی پیچیده، طراحی خطوط انتقال فرکانس بالا، مسیرهای ایزولاسیون حرارتی و رعایت استانداردهای تجهیزات گرید پزشکی.",
      "team-firmware-title": "هسته مهندسی میان‌افزار نهفته",
      "team-firmware-desc": "متخصصان برنامه‌نویسی بلادرنگ برای سیستم‌های سخت‌افزاری بدون استفاده از سیستم‌عامل‌های متداول. کدهای ما مستقیماً به کدهای ماشین تبدیل شده و عملکرد بدون خطای سیستم را تضمین می‌کنند.",
      "team-validation-title": "تیم اعتبارسنجی و شبیه‌سازی HIL",
      "team-validation-desc": "شبیه‌سازی رفتارهای سنسوری و بارهای الکتریکی بردهای نهایی. این فرآیند به ما اجازه می‌دهد قبل از مونتاژ واقعی، رفتار مدار را در مقابل نوسانات شدید شبیه‌سازی نماییم.",

      // DIRECTORY
      "dir-spec-title": "ثبات‌های مشخصات فنی بردهای چاپی",
      "dir-spec-desc": "فهرست نقشه‌های مهندسی میکرومد را بررسی کنید. برای دریافت برگه‌های اطلاعات فنی تخصصی، بر روی دکمه بردهای زیر کلیک کنید:",
      "dir-status-active": "[ فعال ]",
      "dir-status-locked": "[ قفل شده ]",

      // UPLINK
      "uplink-title": "اتصال به درگاه امن مکاتبات مهندسی",
      "uplink-desc": "مدیران تدارکات و کارشناسان فنی سازندگان تجهیزات آزمایشگاهی می‌توانند جهت ثبت سفارشات برد الکترونیکی سفارشی، با شبکه ما ارتباط برقرار کنند.",
      "uplink-params-header": "وضعیت سیستم فرستنده ارتباطات:",
      "uplink-params-1": "✓ امنیت: رمزگذاری نامتقارن با کلیدهای اختصاصی",
      "uplink-params-2": "✓ زمان پاسخگویی و ارائه شبیه‌سازی اولیه: کمتر از ۲۴ ساعت",
      "uplink-params-3": "✓ تاییدیه صلاحیت فنی مهندسان: سطح دسترسی ۴",
      "form-label-company": "شناسه سازمانی شرکت خریدار (OEM)",
      "form-label-email": "آدرس پست الکترونیکی ارتباطی امن",
      "form-label-specs": "پارامترهای عملکردی و نیازمندی‌های سخت‌افزاری برد سفارشی",
      "form-submit-btn": "ارسال کدهای تله‌متری و مشخصات مدار",
      "success-headline": "بسته اطلاعاتی به گذرگاه ارسال شد [🟢]",
      "success-log-1": "> ایجاد ارتباط رمزگذاری شده نامتقارن... موفقیت‌آمیز",
      "success-log-2": "> گردآوری مشخصات فنی برد سفارشی... پایان یافت",
      "success-log-3": "> مسیریابی به کدهای آی‌پی تدارکات: شبکه ایمن",
      "success-log-4": "> پارامترها در ثبات‌های حافظه نوشته شدند.",
      "success-desc": "بسته مشخصات سخت‌افزاری شما با موفقیت دریافت شد. کارشناسان مهندسی میکرومد به زودی برای ارزیابی مدار نهایی با شما تماس خواهند گرفت.",
      "success-dismiss": "[ پاکسازی ثبات‌های خطا ]",

      // FOOTER
      "footer-text": "سیستم‌های فناوری میکرومد // پایداری کدهای حافظه و مدارات تایید شد",
      "footer-metric": "حساسیت کانال فرکانس: پایدار"
    }
  };

  // UI Language toggle
  window.toggleLanguage = function() {
    initAudioEngine();
    currentLang = currentLang === 'en' ? 'fa' : 'en';

    // Set direction & html lang attributes
    const html = document.documentElement;
    if (currentLang === 'fa') {
      html.setAttribute('dir', 'rtl');
      html.setAttribute('lang', 'fa');
      document.getElementById('langToggle').innerText = '[ JUMPER: FA ]';

      // Set Persian translations on boot components if active
      document.getElementById('start-title').innerText = 'واحد مدیریت پروتکل‌های سخت‌افزاری میکرومد // آماده به کار';
      document.getElementById('start-target').innerText = 'معماری مدارهای چاپی: سبک مینیمال و فرکانس بالا';
      document.getElementById('start-load').innerText = 'درحال آماده‌سازی سیستم و بوردها...';
    } else {
      html.setAttribute('dir', 'ltr');
      html.setAttribute('lang', 'en');
      document.getElementById('langToggle').innerText = '[ JUMPER: EN ]';

      document.getElementById('start-title').innerText = 'MICROMED MASTER CONTROL PROTOCOLS // READY';
      document.getElementById('start-target').innerText = 'TARGET ARCHITECTURE: ULTRA-GLOW MINIMAL DESIGNATORS';
      document.getElementById('start-load').innerText = 'BOOTSTRAPPING MAINBOARD REGISTERS [99%]';
    }

    playHardwareTone(880, 0.08);
    setTimeout(() => playHardwareTone(1100, 0.1), 100);

    // Update UI
    updateUIStrings();
    updateDatasheet();

    // Clear selected team node readout when language swaps
    const readout = document.getElementById('teamReadout');
    readout.innerHTML = `
                <span class="text-emerald-700 block text-[9px] font-bold">U1_CELL_READOUT</span>
                <p class="text-emerald-100/60 mt-1">\${translations[currentLang]["team-readout-placeholder"]}</p>
            `;

    // Re-compile background canvas grid coordinates matching new alignment vectors
    compilePCBLayout();
  }

  function updateUIStrings() {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
      const key = el.getAttribute('data-key');
      if (translations[currentLang][key]) {
        el.innerHTML = translations[currentLang][key];
      }
    });
  }

  // WEB AUDIO HARDWARE TONE GENERATOR
  let soundEngineCtx = null;
  let isMuted = true;

  function initAudioEngine() {
    if (!soundEngineCtx) {
      soundEngineCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  window.toggleMainboardAudio = function() {
    initAudioEngine();
    isMuted = !isMuted;
    const toggleBtn = document.getElementById('synthToggle');
    if (isMuted) {
      toggleBtn.innerText = '[🔈 AUDIO_MUTED]';
      toggleBtn.className = "text-[#00ff66] hover:text-white transition-colors uppercase font-bold text-[9px] flex items-center gap-1 border border-emerald-950/60 bg-emerald-950/20 px-2 py-0.5";
    } else {
      toggleBtn.innerText = '[🔊 AUDIO_LIVE]';
      toggleBtn.className = "text-white hover:text-white transition-colors uppercase font-bold text-[9px] flex items-center gap-1 border border-[#00ff66]/60 bg-[#00ff66]/10 px-2 py-0.5 glow-border";
      playHardwareTone(659.25, 0.08);
      setTimeout(() => playHardwareTone(987.77, 0.12), 80);
    }
  }

  window.playHardwareTone = function(freq, dur) {
    if (isMuted) return;
    initAudioEngine();
    try {
      const osc = soundEngineCtx.createOscillator();
      const gain = soundEngineCtx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, soundEngineCtx.currentTime);

      gain.gain.setValueAtTime(0.04, soundEngineCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.00001, soundEngineCtx.currentTime + dur);

      osc.connect(gain);
      gain.connect(soundEngineCtx.destination);

      osc.start();
      osc.stop(soundEngineCtx.currentTime + dur);
    } catch (err) {
      console.log("Synthesizer error ignored for stability: ", err);
    }
  }

  // CLIENT-SIDE ROUTER (SYSTEM BUS REGISTER SWITCHBOARD)
  window.routeTo = function(targetId) {
    playHardwareTone(440, 0.06);
    setTimeout(() => playHardwareTone(880, 0.06), 60);

    // Hide all views
    const views = ['addr-gateway', 'addr-identity', 'addr-directory', 'addr-uplink'];
    views.forEach(viewId => {
      const el = document.getElementById(viewId);
      if (el) el.classList.add('hidden');

      const btn = document.getElementById(`btn-\${viewId}`);
      if (btn) {
        btn.classList.remove('border-emerald-500', 'bg-emerald-950/30', 'text-[#00ff66]');
        btn.classList.add('border-emerald-950', 'text-emerald-600');
      }
    });

    // Show active view
    const activeView = document.getElementById(targetId);
    if (activeView) activeView.classList.remove('hidden');

    const activeBtn = document.getElementById(`btn-\${targetId}`);
    if (activeBtn) {
      activeBtn.classList.add('border-emerald-500', 'bg-emerald-950/30', 'text-[#00ff66]');
      activeBtn.classList.remove('border-emerald-950', 'text-emerald-600');
    }

    // Regenerate background traces to emphasize connection vectors of different pages
    compilePCBLayout();
  }

  // DIAGNOSTIC STARTUP ENGINE (PROMPT BOOT SEQUENCE ON LOAD)
  const logContainer = document.getElementById('startupLog');
  const loaderScreen = document.getElementById('startupScreen');
  const recoveryEntries = [
    "&gt; Mapping ground planes...",
    "&gt; Aligning symmetrical outer boundaries... DONE",
    "&gt; Compiling reference layout models (Lzy Labs edge-routed standard)...",
    "&gt; Allocating premium high-frequency 45-degree micro-traces...",
    "&gt; Calibrating digital-to-analog heat sensor nodes (PT100/1000)...",
    "&gt; Initiating memory protection stack registers (Rust no_std setup)...",
    "&gt; Verifying galvanic barriers: 3.75kV medical isolation standard achieved.",
    "&gt; Deploying secure, high-end Micromed motherboard view..."
  ];

  let entryCounter = 0;
  function renderStartupSeq() {
    if (entryCounter < recoveryEntries.length) {
      const row = document.createElement('div');
      row.innerHTML = recoveryEntries[entryCounter];
      logContainer.appendChild(row);
      logContainer.scrollTop = logContainer.scrollHeight;
      entryCounter++;
      setTimeout(renderStartupSeq, Math.random() * 150 + 50);
    } else {
      setTimeout(() => {
        loaderScreen.style.display = 'none';
        initTelemetryReadout();
      }, 600);
    }
  }

  window.onload = function() {
    updateUIStrings();
    updateDatasheet();
    renderStartupSeq();
  };

  // Live Telemetry stream counter simulating dynamic chip metrics
  function initTelemetryReadout() {
    const displayEl = document.getElementById('firmwareFreq');
    let signalBase = 22.450;
    setInterval(() => {
      signalBase += (Math.random() - 0.5) * 0.035;
      displayEl.innerText = `\${signalBase.toFixed(4)} MHz`;
    }, 800);
  }

  // Accordion Controls for U3
  window.toggleMainboardCap = function(id) {
    playHardwareTone(523.25, 0.05);
    const panel = document.getElementById(id);
    const indicator = document.getElementById(id + '-indicator');
    if (panel.classList.contains('hidden')) {
      panel.classList.remove('hidden');
      indicator.innerText = '-';
    } else {
      panel.classList.add('hidden');
      indicator.innerText = '+';
    }
  }

  // ORGANIZATIONAL IDENTITY: INTERACTIVE TEAM NODE SELECTOR
  window.selectTeamNode = function(nodeKey) {
    playHardwareTone(587.33, 0.05);
    const readout = document.getElementById('teamReadout');

    const titleKey = `team-\${nodeKey}-title`;
    const descKey = `team-\${nodeKey}-desc`;

    readout.innerHTML = `
                <span class="text-[#00ff66] block text-[9px] font-bold">\${translations[currentLang][titleKey]}</span>
                <p class="text-emerald-100/80 mt-1 leading-relaxed">\${translations[currentLang][descKey]}</p>
            `;
  }

  // DYNAMIC BILINGUAL DATASHEETS Blueprints
  let activeProductKey = 'MM-TC-01';

  const datasheetTemplates = {
    en: {
      "MM-TC-01": `
                    <div class="space-y-6">
                        <div class="flex justify-between items-start border-b border-emerald-950 pb-4">
                            <div>
                                <span class="text-xs text-emerald-600 font-mono block">PART IDENTIFIER</span>
                                <h4 class="font-silkscreen text-2xl text-white font-bold tracking-widest">MM-TC-01 // THERMO_MATRIX</h4>
                            </div>
                            <span class="px-2 py-0.5 border border-amber-500/30 bg-amber-950/20 text-[#00ff66] text-[9px] font-mono font-bold uppercase">Revision 3.2</span>
                        </div>
                        <div class="flex justify-center my-6">
                            <div class="relative inline-block border-2 border-[#00ff66] bg-[#020704] p-4 text-center font-mono w-64">
                                <span class="block text-xs text-white font-bold">MM-TC-01</span>
                                <span class="text-[8px] text-emerald-500 block">PT100/1000 SPI FEEDBACK</span>
                                <div class="absolute -left-1.5 top-2 w-1.5 h-1 bg-[#00ff66]"></div>
                                <div class="absolute -left-1.5 top-4 w-1.5 h-1 bg-[#00ff66]"></div>
                                <div class="absolute -left-1.5 top-6 w-1.5 h-1 bg-[#00ff66]"></div>
                                <div class="absolute -left-1.5 top-8 w-1.5 h-1 bg-[#00ff66]"></div>
                                <div class="absolute -right-1.5 top-2 w-1.5 h-1 bg-[#00ff66]"></div>
                                <div class="absolute -right-1.5 top-4 w-1.5 h-1 bg-[#00ff66]"></div>
                                <div class="absolute -right-1.5 top-6 w-1.5 h-1 bg-[#00ff66]"></div>
                                <div class="absolute -right-1.5 top-8 w-1.5 h-1 bg-[#00ff66]"></div>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-mono">
                            <div class="space-y-2 border-e border-emerald-950/80 pe-4">
                                <span class="text-[#00ff66] block font-bold">// HARDWARE PARAMETERS</span>
                                <div class="flex justify-between border-b border-emerald-950/40 py-1">
                                    <span class="text-gray-500">Inputs</span>
                                    <span class="text-white">8-Channel (PT100 / PT1000 Compatible)</span>
                                </div>
                                <div class="flex justify-between border-b border-emerald-950/40 py-1">
                                    <span class="text-gray-500">Dynamic Resolution</span>
                                    <span class="text-white">0.0001°C Temperature delta</span>
                                </div>
                                <div class="flex justify-between border-b border-emerald-950/40 py-1">
                                    <span class="text-gray-500">Power Supply</span>
                                    <span class="text-white">3.3V VCC Analog Line isolated</span>
                                </div>
                                <div class="flex justify-between border-b border-emerald-950/40 py-1">
                                    <span class="text-gray-500">Bus Interface</span>
                                    <span class="text-white">Isolated SPI Bus up to 10MHz</span>
                                </div>
                            </div>
                            <div class="space-y-2">
                                <span class="text-[#00ff66] block font-bold">// FIRMWARE ARCHITECTURE</span>
                                <p class="text-emerald-100/60 leading-relaxed text-[11px]">
                                    Driven by an embedded Rust \`no_std\` driver utilizing non-blocking DMA sweeps over the SPI bus. Zero allocation footprints ensure no memory heap overflow vectors during continuous operation.
                                </p>
                            </div>
                        </div>
                    </div>
                `,
      "MM-MC-04": `
                    <div class="space-y-6">
                        <div class="flex justify-between items-start border-b border-emerald-950 pb-4">
                            <div>
                                <span class="text-xs text-emerald-600 font-mono block">PART IDENTIFIER</span>
                                <h4 class="font-silkscreen text-2xl text-white font-bold tracking-widest">MM-MC-04 // ROTOR_VECTOR</h4>
                            </div>
                            <span class="px-2 py-0.5 border border-amber-500/30 bg-amber-950/20 text-[#00ff66] text-[9px] font-mono font-bold uppercase">Revision 4.0</span>
                        </div>
                        <div class="flex justify-center my-6">
                            <div class="relative inline-block border-2 border-[#00ff66] bg-[#020704] p-4 text-center font-mono w-64">
                                <span class="block text-xs text-white font-bold">MM-MC-04</span>
                                <span class="text-[8px] text-emerald-500 block">3-PHASE FOC MOTOR DRIVER</span>
                                <div class="absolute -bottom-1.5 left-1/4 w-0.5 h-1.5 bg-[#00ff66]"></div>
                                <div class="absolute -bottom-1.5 left-2/4 w-0.5 h-1.5 bg-[#00ff66]"></div>
                                <div class="absolute -bottom-1.5 left-3/4 w-0.5 h-1.5 bg-[#00ff66]"></div>
                                <div class="absolute -top-1.5 left-1/4 w-0.5 h-1.5 bg-[#00ff66]"></div>
                                <div class="absolute -top-1.5 left-2/4 w-0.5 h-1.5 bg-[#00ff66]"></div>
                                <div class="absolute -top-1.5 left-3/4 w-0.5 h-1.5 bg-[#00ff66]"></div>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-mono">
                            <div class="space-y-2 border-e border-emerald-950/80 pe-4">
                                <span class="text-[#00ff66] block font-bold">// HARDWARE PARAMETERS</span>
                                <div class="flex justify-between border-b border-emerald-950/40 py-1">
                                    <span class="text-gray-500">Output Phase</span>
                                    <span class="text-white">3-Phase Sensorless Vector</span>
                                </div>
                                <div class="flex justify-between border-b border-emerald-950/40 py-1">
                                    <span class="text-gray-500">Max Engine Velocity</span>
                                    <span class="text-white">120,000 RPM Torque Adaptive</span>
                                </div>
                                <div class="flex justify-between border-b border-emerald-950/40 py-1">
                                    <span class="text-gray-500">Peak Current Limit</span>
                                    <span class="text-white">45A Phase-to-Phase</span>
                                </div>
                                <div class="flex justify-between border-b border-emerald-950/40 py-1">
                                    <span class="text-gray-500">Safety Shunts</span>
                                    <span class="text-white">Dual-Sense Viscosity Override</span>
                                </div>
                            </div>
                            <div class="space-y-2">
                                <span class="text-[#00ff66] block font-bold">// MOTOR CONTROLLER FIRMWARE</span>
                                <p class="text-emerald-100/60 leading-relaxed text-[11px]">
                                    Integrates custom field-oriented control (FOC) formulas directly synthesized inside real-time bare-metal Rust tasks. Instantly detects viscosity peaks and dynamically adjusts current parameters to safeguard high-RPM laboratory mixing engines.
                                </p>
                            </div>
                        </div>
                    </div>
                `,
      "MM-ISO-02": `
                    <div class="space-y-6">
                        <div class="flex justify-between items-start border-b border-emerald-950 pb-4">
                            <div>
                                <span class="text-xs text-emerald-600 font-mono block">PART IDENTIFIER</span>
                                <h4 class="font-silkscreen text-2xl text-white font-bold tracking-widest">MM-ISO-02 // GALVANIC_SENTRY</h4>
                            </div>
                            <span class="px-2 py-0.5 border border-amber-500/30 bg-amber-950/20 text-[#00ff66] text-[9px] font-mono font-bold uppercase">Revision 1.8</span>
                        </div>
                        <div class="flex justify-center my-6">
                            <div class="relative inline-block border-2 border-[#00ff66] bg-[#020704] p-4 text-center font-mono w-64">
                                <span class="block text-xs text-white font-bold">MM-ISO-02</span>
                                <span class="text-[8px] text-emerald-500 block">GALVANIC SHIELD BARRIER</span>
                                <div class="absolute -left-1.5 top-2 w-1.5 h-1 bg-[#00ff66]"></div>
                                <div class="absolute -left-1.5 top-6 w-1.5 h-1 bg-[#00ff66]"></div>
                                <div class="absolute -right-1.5 top-2 w-1.5 h-1 bg-[#00ff66]"></div>
                                <div class="absolute -right-1.5 top-6 w-1.5 h-1 bg-[#00ff66]"></div>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-mono">
                            <div class="space-y-2 border-e border-emerald-950/80 pe-4">
                                <span class="text-[#00ff66] block font-bold">// HARDWARE PARAMETERS</span>
                                <div class="flex justify-between border-b border-emerald-950/40 py-1">
                                    <span class="text-gray-500">Isolation Limit</span>
                                    <span class="text-white">3.75kV Continuous RMS</span>
                                </div>
                                <div class="flex justify-between border-b border-emerald-950/40 py-1">
                                    <span class="text-gray-500">Data Throughput</span>
                                    <span class="text-white">Up to 150 Mbps High-Speed</span>
                                </div>
                                <div class="flex justify-between border-b border-emerald-950/40 py-1">
                                    <span class="text-gray-500">Compliance Limit</span>
                                    <span class="text-white">IEC 60601-1 Medical Standard</span>
                                </div>
                                <div class="flex justify-between border-b border-emerald-950/40 py-1">
                                    <span class="text-gray-500">Propagation Delay</span>
                                    <span class="text-white">&lt; 12ns Extreme Low Lag</span>
                                </div>
                            </div>
                            <div class="space-y-2">
                                <span class="text-[#00ff66] block font-bold">// SAFETY ISOLATION VECTOR</span>
                                <p class="text-emerald-100/60 leading-relaxed text-[11px]">
                                    Engineered to physically isolate noisy power matrices (motors, induction elements) from micro-controller calculation nodes. Designed with optimized physical trace spacing to prevent electromagnetic arc-over on multi-layer controller boards.
                                </p>
                            </div>
                        </div>
                    </div>
                `
    },
    fa: {
      "MM-TC-01": `
                    <div class="space-y-6" dir="rtl">
                        <div class="flex justify-between items-start border-b border-emerald-950 pb-4">
                            <div>
                                <span class="text-xs text-emerald-600 font-sans block">شناسه قطعه سخت‌افزاری</span>
                                <h4 class="font-sans text-2xl text-white font-bold tracking-widest">MM-TC-01 // ماتریس کنترل حرارتی</h4>
                            </div>
                            <span class="px-2 py-0.5 border border-amber-500/30 bg-amber-950/20 text-[#00ff66] text-[9px] font-sans font-bold uppercase">نسخه ۳.۲</span>
                        </div>
                        <div class="flex justify-center my-6">
                            <div class="relative inline-block border-2 border-[#00ff66] bg-[#020704] p-4 text-center font-mono w-64">
                                <span class="block text-xs text-white font-bold">MM-TC-01</span>
                                <span class="text-[8px] text-emerald-500 block">PT100/1000 بازخورد ارتباطی SPI</span>
                                <div class="absolute -left-1.5 top-2 w-1.5 h-1 bg-[#00ff66]"></div>
                                <div class="absolute -left-1.5 top-4 w-1.5 h-1 bg-[#00ff66]"></div>
                                <div class="absolute -left-1.5 top-6 w-1.5 h-1 bg-[#00ff66]"></div>
                                <div class="absolute -left-1.5 top-8 w-1.5 h-1 bg-[#00ff66]"></div>
                                <div class="absolute -right-1.5 top-2 w-1.5 h-1 bg-[#00ff66]"></div>
                                <div class="absolute -right-1.5 top-4 w-1.5 h-1 bg-[#00ff66]"></div>
                                <div class="absolute -right-1.5 top-6 w-1.5 h-1 bg-[#00ff66]"></div>
                                <div class="absolute -right-1.5 top-8 w-1.5 h-1 bg-[#00ff66]"></div>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-sans">
                            <div class="space-y-2 border-l border-emerald-950/80 pl-4">
                                <span class="text-[#00ff66] block font-bold">// پارامترهای فنی سخت‌افزاری</span>
                                <div class="flex justify-between border-b border-emerald-950/40 py-1">
                                    <span class="text-gray-500">کانال‌های ورودی</span>
                                    <span class="text-white">۸ کانال مجزا (سازگار با سنسورهای PT100 / PT1000)</span>
                                </div>
                                <div class="flex justify-between border-b border-emerald-950/40 py-1">
                                    <span class="text-gray-500">دقت تشخیص داینامیک</span>
                                    <span class="text-white">تغییرات دمایی تا مقیاس بسیار دقیق ۰.۰۰۰۱ درجه سانتی‌گراد</span>
                                </div>
                                <div class="flex justify-between border-b border-emerald-950/40 py-1">
                                    <span class="text-gray-500">ولتاژ مصرفی</span>
                                    <span class="text-white">خط ۳.۳ ولت جریان آنالوگ فیلتر شده ایزوله</span>
                                </div>
                                <div class="flex justify-between border-b border-emerald-950/40 py-1">
                                    <span class="text-gray-500">گذرگاه ارتباطی</span>
                                    <span class="text-white">گذرگاه SPI ایزوله فرکانس بالا تا ۱۰ مگاهرتز</span>
                                </div>
                            </div>
                            <div class="space-y-2">
                                <span class="text-[#00ff66] block font-bold">// ساختار بهینه‌سازی میان‌افزار</span>
                                <p class="text-emerald-100/60 leading-relaxed text-[11px]">
                                    راه‌اندازی کاملاً مستقل با کدهای سیستم‌عامل نوظهور Rust بدون بارگذاری متغیرهای موقتی. این پیکربندی طول عمر فرکانسی پردازنده را افزایش داده و مانع از سرریز حافظه در پردازش‌های مداوم می‌گردد.
                                </p>
                            </div>
                        </div>
                    </div>
                `,
      "MM-MC-04": `
                    <div class="space-y-6" dir="rtl">
                        <div class="flex justify-between items-start border-b border-emerald-950 pb-4">
                            <div>
                                <span class="text-xs text-emerald-600 font-sans block">شناسه قطعه سخت‌افزاری</span>
                                <h4 class="font-sans text-2xl text-white font-bold tracking-widest">MM-MC-04 // بردار سرعت موتور</h4>
                            </div>
                            <span class="px-2 py-0.5 border border-amber-500/30 bg-amber-950/20 text-[#00ff66] text-[9px] font-sans font-bold uppercase">نسخه ۴.۰</span>
                        </div>
                        <div class="flex justify-center my-6">
                            <div class="relative inline-block border-2 border-[#00ff66] bg-[#020704] p-4 text-center font-mono w-64">
                                <span class="block text-xs text-white font-bold">MM-MC-04</span>
                                <span class="text-[8px] text-emerald-500 block">سیستم کنترل موتور ۳ فاز مداربسته FOC</span>
                                <div class="absolute -bottom-1.5 left-1/4 w-0.5 h-1.5 bg-[#00ff66]"></div>
                                <div class="absolute -bottom-1.5 left-2/4 w-0.5 h-1.5 bg-[#00ff66]"></div>
                                <div class="absolute -bottom-1.5 left-3/4 w-0.5 h-1.5 bg-[#00ff66]"></div>
                                <div class="absolute -top-1.5 left-1/4 w-0.5 h-1.5 bg-[#00ff66]"></div>
                                <div class="absolute -top-1.5 left-2/4 w-0.5 h-1.5 bg-[#00ff66]"></div>
                                <div class="absolute -top-1.5 left-3/4 w-0.5 h-1.5 bg-[#00ff66]"></div>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-sans">
                            <div class="space-y-2 border-l border-emerald-950/80 pl-4">
                                <span class="text-[#00ff66] block font-bold">// پارامترهای فنی سخت‌افزاری</span>
                                <div class="flex justify-between border-b border-emerald-950/40 py-1">
                                    <span class="text-gray-500">سیستم خروجی</span>
                                    <span class="text-white">۳ فاز با کنترل برداری پیشرفته بدون نیاز به سنسور فیزیکی</span>
                                </div>
                                <div class="flex justify-between border-b border-emerald-950/40 py-1">
                                    <span class="text-gray-500">حداکثر دور موتور</span>
                                    <span class="text-white">۱۲۰,۰۰۰ دور در دقیقه با کنترل تطبیقی گشتاور موتور</span>
                                </div>
                                <div class="flex justify-between border-b border-emerald-950/40 py-1">
                                    <span class="text-gray-500">محدودیت جریان لحظه‌ای</span>
                                    <span class="text-white">۴۵ آمپر فاز به فاز مدار فیلتر شده</span>
                                </div>
                                <div class="flex justify-between border-b border-emerald-950/40 py-1">
                                    <span class="text-gray-500">سیستم‌های قطع اضطراری</span>
                                    <span class="text-white">حفاظت آنی در زمان افزایش ناگهانی چسبندگی مواد خروجی</span>
                                </div>
                            </div>
                            <div class="space-y-2">
                                <span class="text-[#00ff66] block font-bold">// کدهای راه‌انداز تله‌متری موتور</span>
                                <p class="text-emerald-100/60 leading-relaxed text-[11px]">
                                    محاسبه هوشمند برداری جریان مصرفی موتور مستقیماً در هسته ریزپردازنده بدون وقفه زمانی. این فناوری زمان خستگی متریال موتور را کاهش داده و ایمنی چرخش دور بالا را در دستگاه‌های صنعتی تضمین می‌نماید.
                                </p>
                            </div>
                        </div>
                    </div>
                `,
      "MM-ISO-02": `
                    <div class="space-y-6" dir="rtl">
                        <div class="flex justify-between items-start border-b border-emerald-950 pb-4">
                            <div>
                                <span class="text-xs text-emerald-600 font-sans block">شناسه قطعه سخت‌افزاری</span>
                                <h4 class="font-sans text-2xl text-white font-bold tracking-widest">MM-ISO-02 // مانع گالوانیک فرکانس بالا</h4>
                            </div>
                            <span class="px-2 py-0.5 border border-amber-500/30 bg-amber-950/20 text-[#00ff66] text-[9px] font-sans font-bold uppercase">نسخه ۱.۸</span>
                        </div>
                        <div class="flex justify-center my-6">
                            <div class="relative inline-block border-2 border-[#00ff66] bg-[#020704] p-4 text-center font-mono w-64">
                                <span class="block text-xs text-white font-bold">MM-ISO-02</span>
                                <span class="text-[8px] text-emerald-500 block">مانع تداخل الکترومغناطیسی مدار چاپی</span>
                                <div class="absolute -left-1.5 top-2 w-1.5 h-1 bg-[#00ff66]"></div>
                                <div class="absolute -left-1.5 top-6 w-1.5 h-1 bg-[#00ff66]"></div>
                                <div class="absolute -right-1.5 top-2 w-1.5 h-1 bg-[#00ff66]"></div>
                                <div class="absolute -right-1.5 top-6 w-1.5 h-1 bg-[#00ff66]"></div>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs font-sans">
                            <div class="space-y-2 border-l border-emerald-950/80 pl-4">
                                <span class="text-[#00ff66] block font-bold">// پارامترهای فنی سخت‌افزاری</span>
                                <div class="flex justify-between border-b border-emerald-950/40 py-1">
                                    <span class="text-gray-500">سقف ایزولاسیون ولتاژ</span>
                                    <span class="text-white">۳.۷۵ کیلو ولت متناوب مستمر</span>
                                </div>
                                <div class="flex justify-between border-b border-emerald-950/40 py-1">
                                    <span class="text-gray-500">پهنای باند داده خطوط</span>
                                    <span class="text-white">انتقال فوق سریع سیگنال تا ۱۵۰ مگابیت بر ثانیه</span>
                                </div>
                                <div class="flex justify-between border-b border-emerald-950/40 py-1">
                                    <span class="text-gray-500">تطبیق استاندارد ایمنی</span>
                                    <span class="text-white">گرید پزشکی با عایق‌سازی خطرات شوک جریان</span>
                                </div>
                                <div class="flex justify-between border-b border-emerald-950/40 py-1">
                                    <span class="text-gray-500">تاخیر انتشار پالس سیگنال</span>
                                    <span class="text-white">تاخیر فوق‌العاده کم در مقیاس کمتر از ۱۲ نانوثانیه</span>
                                </div>
                            </div>
                            <div class="space-y-2">
                                <span class="text-[#00ff66] block font-bold">// اهمیت استراتژیک ایزولاسیون مدار چاپی</span>
                                <p class="text-emerald-100/60 leading-relaxed text-[11px]">
                                    طراحی فیزیکی مجاری ایزوله روی برد جهت تفکیک مدارهای قدرت نویزساز (موتورها، رله‌ها) از پردازنده‌های حساس تله‌متری. طراحی فاصله فیزیکی امن برای جلوگیری از جهش‌های ناگهانی ولتاژ برق در بردهای لایه بالا.
                                </p>
                            </div>
                        </div>
                    </div>
                `
    }
  };

  window.selectProduct = function(prodKey) {
    playHardwareTone(659.25, 0.05);
    activeProductKey = prodKey;

    const productsList = ['MM-TC-01', 'MM-MC-04', 'MM-ISO-02'];

    // Toggle datasheet selector buttons style
    productsList.forEach(key => {
      const btn = document.getElementById(`btn-prod-\${key}`);
      if (btn) {
        btn.classList.remove('border-emerald-500', 'bg-emerald-950/20', 'text-[#00ff66]');
        btn.classList.add('border-emerald-950', 'text-emerald-600');

        const labelSpan = btn.querySelector('span:last-child');
        if (labelSpan) {
          labelSpan.innerText = translations[currentLang]["dir-status-locked"];
          labelSpan.className = 'text-[9px] text-gray-500';
        }
      }
    });

    const activeBtn = document.getElementById(`btn-prod-\${prodKey}`);
    if (activeBtn) {
      activeBtn.classList.add('border-emerald-500', 'bg-emerald-950/20', 'text-[#00ff66]');
      activeBtn.classList.remove('border-emerald-950', 'text-emerald-600');

      const labelSpan = activeBtn.querySelector('span:last-child');
      if (labelSpan) {
        labelSpan.innerText = translations[currentLang]["dir-status-active"];
        labelSpan.className = 'text-[9px] text-[#00ff66] font-bold';
      }
    }

    updateDatasheet();
  }

  function updateDatasheet() {
    const container = document.getElementById('datasheetContent');
    const designator = document.getElementById('datasheetDesignator');

    if (container) {
      container.innerHTML = datasheetTemplates[currentLang][activeProductKey] || '';
    }
    if (designator) {
      designator.innerText = `DATASHEET // \${activeProductKey}`;
    }
  }

  // B2B DIRECT UPLINK FORM CONTROLS
  window.handleContractSubmission = function(e) {
    e.preventDefault();
    playHardwareTone(587.33, 0.1);
    setTimeout(() => playHardwareTone(880, 0.18), 120);
    document.getElementById('formSuccessMessage').classList.remove('hidden');
  }

  window.dismissFormNotification = function() {
    playHardwareTone(440, 0.06);
    document.getElementById('formSuccessMessage').classList.add('hidden');
    document.getElementById('pcbContractForm').reset();
  }

  // HIGH-PRECISION PCB CANVAS BOARD GENERATOR (MATCHES REFERENCE IMAGE DIRECTLY)
  const pcbCanvas = document.getElementById('pcbBackgroundCanvas');
  const pcbCtx = pcbCanvas.getContext('2d');

  let staticTraces = [];

  function layoutPCBSubstrate() {
    pcbCanvas.width = window.innerWidth;
    pcbCanvas.height = window.innerHeight;
    compilePCBLayout();
  }

  // Renders structured, clean PCB tracks based closely on your reference image:
  // Structured edge-routed 45-degree channels coming inwards from borders.
  function compilePCBLayout() {
    staticTraces = [];
    const w = pcbCanvas.width;
    const h = pcbCanvas.height;
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';

    // Adapt structural trace rendering directions on swap
    const adjustX = (xVal) => isRtl ? (w - xVal) : xVal;

    // Helper to generate a parallel bus to increase rendering density procedurally
    function addParallelBus(startX, startY, count, spacing, directions) {
      for (let i = 0; i < count; i++) {
        let pts = [];
        // Offset starting point perpendicular to start direction (typically starting vertically down)
        let curX = startX + i * spacing;
        let curY = startY;
        pts.push({ x: adjustX(curX), y: curY });

        for (let seg of directions) {
          let angle = seg.angle;
          if (isRtl) {
            angle = (180 - angle + 360) % 360;
          }
          const rad = (angle * Math.PI) / 180;
          curX += seg.length * Math.cos(rad);
          curY += seg.length * Math.sin(rad);
          pts.push({ x: adjustX(curX), y: curY });
        }

        staticTraces.push({
          points: pts,
          color: '#00ff66',
          width: 1.5,
          pulseProgress: Math.random()
        });
      }
    }

    // ---Procedural High-Density CAD Bus Definitions---

    // 1. Top Edge Interface Bus (6 Parallel tracks routing down with 45-degree offsets)
    addParallelBus(w * 0.18, 0, 6, 14, [
      { angle: 90, length: h * 0.12 },
      { angle: 135, length: 60 },
      { angle: 90, length: h * 0.14 }
    ]);

    // 2. Center-Left High-Density Data Bus (8 Parallel tracks bridging the vertical grid)
    addParallelBus(w * 0.05, h * 0.35, 8, 10, [
      { angle: 0, length: w * 0.12 },
      { angle: 45, length: 80 },
      { angle: 0, length: w * 0.10 }
    ]);

    // 3. Top-Right Corner Interface (4 parallel tracks looping with neat 45-degree angles)
    addParallelBus(w * 0.85, 0, 4, 16, [
      { angle: 90, length: h * 0.10 },
      { angle: 225, length: 70 },
      { angle: 180, length: w * 0.08 }
    ]);

    // 4. Center-Right Diagnostic Matrix (7 dense parallel tracks)
    addParallelBus(w * 0.65, h * 0.20, 7, 12, [
      { angle: 180, length: w * 0.10 },
      { angle: 135, length: 90 },
      { angle: 180, length: w * 0.08 }
    ]);

    // 5. Bottom Center Heavy Power Rails (4 extra-wide parallel channels)
    addParallelBus(w * 0.48, h, 4, 20, [
      { angle: 270, length: h * 0.16 },
      { angle: 315, length: 110 },
      { angle: 270, length: h * 0.10 }
    ]);

    // 6. Bottom-Left Analog Return Channels (5 parallel traces)
    addParallelBus(w * 0.12, h, 5, 12, [
      { angle: 270, length: h * 0.14 },
      { angle: 225, length: 80 },
      { angle: 270, length: h * 0.12 }
    ]);

    // 7. Bottom-Right MCU Memory Link Array (9 parallel tracks routing closely)
    addParallelBus(w * 0.78, h, 9, 8, [
      { angle: 270, length: h * 0.18 },
      { angle: 225, length: 90 },
      { angle: 270, length: h * 0.08 }
    ]);

    // 8. Scattered Test Point Vias to guarantee coverage across all viewport destinations
    const scatterPaths = [
      { x: w * 0.08, y: h * 0.15, d: [{ angle: 45, length: 50 }, { angle: 0, length: 70 }] },
      { x: w * 0.90, y: h * 0.50, d: [{ angle: 135, length: 60 }, { angle: 180, length: 80 }] },
      { x: w * 0.28, y: h * 0.82, d: [{ angle: 315, length: 70 }, { angle: 0, length: 60 }] },
      { x: w * 0.72, y: h * 0.32, d: [{ angle: 135, length: 50 }, { angle: 180, length: 50 }] },
      { x: w * 0.15, y: h * 0.65, d: [{ angle: 45, length: 80 }, { angle: 90, length: 40 }] }
    ];

    scatterPaths.forEach(path => {
      let pts = [];
      let curX = path.x;
      let curY = path.y;
      pts.push({ x: adjustX(curX), y: curY });

      for (let seg of path.d) {
        let angle = seg.angle;
        if (isRtl) {
          angle = (180 - angle + 360) % 360;
        }
        const rad = (angle * Math.PI) / 180;
        curX += seg.length * Math.cos(rad);
        curY += seg.length * Math.sin(rad);
        pts.push({ x: adjustX(curX), y: curY });
      }

      staticTraces.push({
        points: pts,
        color: '#00ff66',
        width: 1.6,
        pulseProgress: Math.random()
      });
    });
  }

  function animateMainboardPCB() {
    pcbCtx.clearRect(0, 0, pcbCanvas.width, pcbCanvas.height);

    // Substrate Grid layout (clean, ultra-subtle coordinate references)
    pcbCtx.strokeStyle = 'rgba(0, 255, 102, 0.02)';
    pcbCtx.lineWidth = 0.5;
    const step = 40;
    for (let x = 0; x < pcbCanvas.width; x += step) {
      pcbCtx.beginPath();
      pcbCtx.moveTo(x, 0);
      pcbCtx.lineTo(x, pcbCanvas.height);
      pcbCtx.stroke();
    }
    for (let y = 0; y < pcbCanvas.height; y += step) {
      pcbCtx.beginPath();
      pcbCtx.moveTo(0, y);
      pcbCtx.lineTo(pcbCanvas.width, y);
      pcbCtx.stroke();
    }

    // Draw Clean PCB Traces with Symmetrical Glow Channels (from the reference GIF)
    staticTraces.forEach(trace => {
      if (trace.points.length === 0) return;

      // 1. Draw wide, semi-transparent backing glow track
      pcbCtx.beginPath();
      pcbCtx.moveTo(trace.points[0].x, trace.points[0].y);
      for (let j = 1; j < trace.points.length; j++) {
        pcbCtx.lineTo(trace.points[j].x, trace.points[j].y);
      }
      pcbCtx.strokeStyle = 'rgba(0, 255, 102, 0.08)';
      pcbCtx.lineWidth = 5;
      pcbCtx.stroke();

      // 2. Draw sharp, bright inner track core
      pcbCtx.strokeStyle = 'rgba(0, 255, 102, 0.35)';
      pcbCtx.lineWidth = trace.width;
      pcbCtx.stroke();

      // 3. Draw clean circular termination pads (vias) at path endpoints
      const lastPoint = trace.points[trace.points.length - 1];
      pcbCtx.beginPath();
      pcbCtx.arc(lastPoint.x, lastPoint.y, 4.5, 0, Math.PI * 2);
      pcbCtx.fillStyle = '#0a0c0d';
      pcbCtx.strokeStyle = '#00ff66';
      pcbCtx.lineWidth = 1.5;
      pcbCtx.fill();
      pcbCtx.stroke();

      // 4. Animate glowing electron data packet traveling along paths
      trace.pulseProgress += 0.003;
      if (trace.pulseProgress >= 1) {
        trace.pulseProgress = 0;
      }

      const segmentCount = trace.points.length - 1;
      const progressPerSegment = 1 / segmentCount;
      const currentSegment = Math.min(
              Math.floor(trace.pulseProgress / progressPerSegment),
              segmentCount - 1
      );
      const segmentProgress = (trace.pulseProgress % progressPerSegment) / progressPerSegment;

      const ptA = trace.points[currentSegment];
      const ptB = trace.points[currentSegment + 1];

      if (ptA && ptB) {
        const pulseX = ptA.x + (ptB.x - ptA.x) * segmentProgress;
        const pulseY = ptA.y + (ptB.y - ptA.y) * segmentProgress;

        // High-contrast glowing head
        pcbCtx.beginPath();
        pcbCtx.arc(pulseX, pulseY, 2.5, 0, Math.PI * 2);
        pcbCtx.fillStyle = '#00ff66';
        pcbCtx.shadowColor = '#00ff66';
        pcbCtx.shadowBlur = 8;
        pcbCtx.fill();
        pcbCtx.shadowBlur = 0; // Reset
      }
    });

    requestAnimationFrame(animateMainboardPCB);
  }

  // Initialize board
  window.addEventListener('resize', layoutPCBSubstrate);
  layoutPCBSubstrate();
  animateMainboardPCB();
