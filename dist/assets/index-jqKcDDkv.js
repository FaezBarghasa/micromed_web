(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();let u="en",I=!0,q="blue-pill",M=!0,h=.4,y=-.3;const U=1;let O=!1,P=0,k=0,z="MM-TC-01";function Z(t){u=t}function Q(t){I=t}function ee(t){q=t}function D(t){M=t}function N(t){h=t}function F(t){y=t}function v(t){O=t}function E(t){P=t}function w(t){k=t}function te(t){z=t}let b=null;function B(){b||(b=new(window.AudioContext||window.webkitAudioContext))}function se(){B(),Q(!I);const t=document.getElementById("synthToggle");t&&(I?(t.innerText="[🔈 AUDIO_MUTED]",t.className="text-[#00ff66] hover:text-white transition-colors uppercase font-bold text-[9px] flex items-center gap-1 border border-emerald-950/60 bg-emerald-950/20 px-2 py-0.5"):(t.innerText="[🔊 AUDIO_LIVE]",t.className="text-white hover:text-white transition-colors uppercase font-bold text-[9px] flex items-center gap-1 border border-[#00ff66]/60 bg-[#00ff66]/10 px-2 py-0.5 glow-border",d(659.25,.08),setTimeout(()=>d(987.77,.12),80)))}function d(t,e){if(!I&&(B(),!!b))try{const n=b.createOscillator(),s=b.createGain();n.type="sine",n.frequency.setValueAtTime(t,b.currentTime),s.gain.setValueAtTime(.04,b.currentTime),s.gain.exponentialRampToValueAtTime(1e-5,b.currentTime+e),n.connect(s),s.connect(b.destination),n.start(),n.stop(b.currentTime+e)}catch(n){console.log("Synthesizer error ignored for stability: ",n)}}const ne={en:{"header-desc":"EMBEDDED HARDWARE CONTRACTING CELL // SYSTEM ARCHITECTURE BUS","sys-bus-link-status":"<span class='w-1.5 h-1.5 bg-[#00ff66] rounded-full inline-block animate-pulse'></span> IMPEDANCE_MATCHED","nav-register-label":"SYSTEM_BUS_ROUTING_REGISTER","nav-gateway":"[0x00] CORE_GATEWAY","nav-identity":"[0x01] ORG_IDENTITY","nav-directory":"[0x02] HW_DIRECTORY","nav-uplink":"[0x03] SECURE_UPLINK","gateway-matrix-prefix":"[!] HARDWARE VALIDATION MATRIX","gateway-matrix-suffix":"REGISTER ADDR_0x00 ONLINE","gateway-hero-title":"Architecting safe silicon logic for mission-critical medical & laboratory environments.","gateway-hero-desc":"We are elite electronic engineering contractors specializing in the end-to-end design, testing, and production optimization of multi-layer controller boards. Our team does not build consumer hardware; we develop the vital brain components (harnessing safe, bare-metal Rust firmware) for original equipment manufacturers (OEMs) producing precision temperature-controlled health incubators, food-safety diagnostic ovens, and high-RPM mixing engines.","spec-label-thermal":"THERMO_MATRIX","spec-val-thermal":"0.0001°C RESOLUTION","spec-desc-thermal":"> Multi-channel cold-junction","spec-label-velocity":"VELOCITY_VECTOR","spec-val-velocity":"3-PHASE SENSORLESS FOC","spec-desc-velocity":"> Closed-loop torque profiling","spec-label-isolation":"ISOLATION_BARRIER","spec-val-isolation":"GALVANIC ISOLATION 3.75kV","spec-desc-isolation":"> IEC 60601-1 Medical compliant","summary-header":"HARDWARE SUMMARY","summary-subheader":"Expand standard architecture pipelines:","summary-cap1-title":"[REG_01] HIGH-DENSITY INTERCONNECT","summary-cap1-desc":"Multi-layer high frequency PCB development (up to 12 layers) with micro-vias, blind/buried pathways, and controlled trace impedance preventing high-frequency cross-talk.","summary-cap2-title":"[REG_02] EMBEDDED RUST FIRMWARE","summary-cap2-desc":"Bare-metal embedded Rust configurations. Complete memory protection vectors with zero runtime memory manager (no_std architecture), mitigating race conditions.","summary-cap3-title":"[REG_03] HARSH ENVIRONMENT TESTING","summary-cap3-desc":"Simulating load failures, heat dissipation profiles, and hardware-in-the-loop validation using custom signal simulation equipment designed directly in-house.","flows-header":"SYSTEM ARCHITECTURE FLOWS","flows-desc":"Click hardware nodes below to execute diagnostic address switching.","flows-btn1":"ORGANIZATIONAL LAB","flows-btn1-sub":"> Core design protocols","flows-btn2":"PROPRIETARY PRODUCTS","flows-btn2-sub":"> Technical datasheets","flows-btn3":"SECURE CONNECTIONS","flows-btn3-sub":"> Fast contracting bus","about-hero-header":"DETERMINISTIC SECURITY & SAFETY BY DESIGN","about-hero-body":`
                  <p>In high-stakes laboratory and medical hardware, firmware failure is not a minor inconvenience—it is a catastrophic risk. If an incubator's temperature variance spikes during stem-cell cultivation or if a mixer engine exceeds safety speed thresholds, entire pipelines fail and research is destroyed.</p>
                  <p>At Micromed, we mitigate these vectors using **Deterministic Design Engineering**. Our hardware relies on mathematical guarantees. By using bare-metal, no_std **Rust systems-programming architecture**, we eliminate memory allocation leaks, race conditions, and undefined behavior at compile-time.</p>
                  <p>Our boards run without a heavyweight operating system layer (no Windows, no Linux). Instead, they utilize robust Real-Time Interrupt Driven Concurrency (RTIC) task managers to interface directly with ARM Cortex-M processors.</p>
              `,"about-codes-header":"THE MICROMED COMPLIANCE CODES:","about-codes-1":"✓ Complete lack of garbage-collector latency vectors.","about-codes-2":"✓ Strict zero-cost hardware boundary abstractions.","about-codes-3":"✓ Full galvanic isolation separation standards across all sensitive buses.","about-team-title":"TEAM METASTATE BLUEPRINT","about-team-desc":"Like an integrated circuit, our organizational architecture operates via synchronized, deterministic processing blocks. Click any functional group node below to interrogate credentials.","team-cell-1":"[CELL_01]: SILICON_DESIGN_NODE","team-cell-2":"[CELL_02]: EMBEDDED_RUST_CORE","team-cell-3":"[CELL_03]: HIL_STRESS_VALIDATION","team-read-specs-btn":"READ SPECS ►","team-readout-placeholder":"Select an organizational cell above to map team pipelines, technical credentials, and active system operations.","team-silicon-title":"CELL_01: SILICON_DESIGN_NODE","team-silicon-desc":"Lead Hardware Architects managing spatial optimization profiles, high-frequency trace routing, galvanic isolation pathways, and multi-layer stack parameters (up to 12 layers) matching extreme environmental medical standards.","team-firmware-title":"CELL_02: EMBEDDED_RUST_CORE","team-firmware-desc":"Systems level engineers implementing uncompromised, bare-metal Rust configurations with zero-cost bounds wrappers. No heap managers, completely deterministic task dispatchers preventing CPU lag during physical critical events.","team-validation-title":"CELL_03: HIL_STRESS_VALIDATION","team-validation-desc":"HIL (Hardware-In-The-Loop) design specialists simulating sensor feedback inputs, sudden motor lockouts, environmental overload thresholds, and voltage oscillations on test rigs built entirely in-house.","dir-spec-title":"SPEC_REGISTERS","dir-spec-desc":"Query proprietary Micromed hardware blueprints. Select a model register to output high-fidelity data sheets directly from our firmware files:","dir-status-active":"[ ACTIVE ]","dir-status-locked":"[ LOCKED ]","uplink-title":"SECURE HARDWARE HANDSHAKE","uplink-desc":"Procurement managers and technical system architects can initiate a direct data bus uplink to request hardware contracting or embedded firmware optimization projects.","uplink-params-header":"ACTIVE TRANSMITTER CHANNEL PARAMS:","uplink-params-1":"✓ CONFIG: PGP COMPLIANT ENCRYPTION MATRIX","uplink-params-2":"✓ SCHEMATIC DISPATCH TIMELINE: < 24 HOURS","uplink-params-3":"✓ TECHNICAL ACCESS CLEARANCE: LEVEL_4 APPROVED","form-label-company":"OEM_COMPANY_IDENTIFIER","form-label-email":"SECURE_COM_ROUTING","form-label-specs":"BOARD_SPECS_AND_TELEMETRY_PARAMETERS","form-submit-btn":"ESTABLISH DATA BUS MATRIX //","success-headline":"UPLINK PACKET DEPLOYED [🟢]","success-log-1":"> Initiating RSA handshakes (MM-4096-B)... SUCCESS","success-log-2":"> Compiling specifications block... COMPLETED","success-log-3":"> Routing telemetry packets: IP_COM_SECURED","success-log-4":"> Data bus written to memory array blocks.","success-desc":"Hardware contracting packet received successfully. A systems engineering contractor stands notified to analyze physical parameters.","success-dismiss":"[ CLEAR_LOG_REGISTERS ]","footer-text":"MICROMED TECHNOLOGY SYSTEMS // CORE MEMORY REG REGISTERS OPERATIONAL","footer-metric":"TRACE_SENSITIVITY: HI-FI"},fa:{"header-desc":"بخش قراردادهای مهندسی سخت‌افزار نهفته // گذرگاه سیستم اتصالات","sys-bus-link-status":"<span class='w-1.5 h-1.5 bg-[#00ff66] rounded-full inline-block animate-pulse'></span> امپدانس_تنظیم_شده","nav-register-label":"ثبات‌های_مسیریابی_گذرگاه_سیستم","nav-gateway":"[0x00] درگاه_اصلی_شبکه","nav-identity":"[0x01] هویت_سازمانی","nav-directory":"[0x02] کاتالوگ_محصولات","nav-uplink":"[0x03] ارتباطات_ایمن","gateway-matrix-prefix":"[!] ماتریس اعتبارسنجی قطعات سخت‌افزاری","gateway-matrix-suffix":"آدرس ثبت بورد 0x00 در دسترس است","gateway-hero-title":"مهندسی و طراحی مدارهای منطقی با ایمنی بالا برای تجهیزات پزشکی و آزمایشگاهی حساس.","gateway-hero-desc":"تیم ما متشکل از مهندسان الکترونیک متخصص در طراحی، شبیه‌سازی و بهینه‌سازی تولید بردهای چندلایه می‌باشد. ما محصولات مصرفی تولید نمی‌کنیم؛ تخصص ما توسعه هسته‌های پردازشی امن (با استفاده از زبان برنامه‌نویسی بلادرنگ و بدون سیستم‌عامل Rust) برای سازندگان سیستم‌های کنترل دما، فرهای آزمایشگاهی مواد غذایی و همزن‌های دور بالا است.","spec-label-thermal":"کنترلر_حرارتی","spec-val-thermal":"دقت سنجش ۰.۰۰۰۱ درجه","spec-desc-thermal":"> سنسور دقیق جبران‌ساز دمایی","spec-label-velocity":"بردار_سرعت_موتور","spec-val-velocity":"سیستم پیشرفته ۳ فاز بدون سنسور","spec-desc-velocity":"> بهینه‌سازی مداوم نمودار گشتاور موتور","spec-label-isolation":"مانع_ایزولاسیون","spec-val-isolation":"ایزولاسیون کامل تا ۳.۷۵ کیلوولت","spec-desc-isolation":"> استاندارد پزشکی IEC 60601-1","summary-header":"خلاصه وضعیت بوردها","summary-subheader":"مسیرهای فرعی مدار چاپی:","summary-cap1-title":"[ثبات ۰۱] طراحی مدار فرکانس بالا","summary-cap1-desc":"طراحی بردهای چندلایه (تا ۱۲ لایه) به همراه کانال‌های ارتباطی کور و مدفون با امپدانس فیزیکی دقیق برای مهار تداخل فرکانسی.","summary-cap2-title":"[ثبات ۰۲] برنامه‌نویسی نهفته Rust","summary-cap2-desc":"کدهای میان‌افزار بلادرنگ بدون تخصیص پویای حافظه (ساختار no_std) جهت به حداقل رساندن تداخل زمان اجرا.","summary-cap3-title":"[ثبات ۰۳] تست سناریوهای بحرانی","summary-cap3-desc":"شبیه‌سازی نوسانات فیزیکی و رفتارهای قطعات قبل از مونتاژ نهایی در محیط‌های آزمایشگاهی پیشرفته.","flows-header":"گذرگاه‌های ارتباطی سیستم","flows-desc":"برای تغییر آدرس‌های تله‌متری، روی گره‌های مدار زیر کلیک کنید.","flows-btn1":"واحد مهندسی آزمایشگاهی","flows-btn1-sub":"> شیوه‌های طراحی پایه","flows-btn2":"ثبات قطعات سخت‌افزاری","flows-btn2-sub":"> نقشه‌های فنی و کاتالوگ","flows-btn3":"ارتباط امن با هسته","flows-btn3-sub":"> گذرگاه تبادل اطلاعات سریع","about-hero-header":"امنیت تضمین‌شده و معماری فیزیکی پایدار","about-hero-body":`
                  <p>در تجهیزات پیشرفته پزشکی و بیمارستانی، خرابی میان‌افزارها یک مشکل ساده نیست بلکه خطری جانی و مالی است. تغییر ناگهانی دمای انکوباتورهای نگهداری سلول‌های بنیادی یا چرخش خارج از محدوده موتورهای سانتریفیوژ، تحقیقات علمی چندساله را به طور کامل نابود می‌کند.</p>
                  <p>تیم میکرومد با استفاده از <strong>طراحی سیستم‌های قطعی ریاضی</strong> خطرات ناشی از کدهای نامطمئن را از بین می‌برد. با تکیه بر کدهای بهینه‌سازی شده زبان برنامه‌نویسی Rust، احتمال سرریز داده، نشت حافظه و رفتارهای نامعلوم نرم‌افزاری در زمان کامپایل کاملاً برطرف می‌گردد.</p>
                  <p>کدهای ما مستقیماً روی پردازنده‌های ARM Cortex-M اجرا شده و به سیستم‌عامل‌های سنگین وابستگی ندارند که پایداری حداکثری سیستم را در شرایط نوسان شدید جریان تضمین می‌کند.</p>
              `,"about-codes-header":"استاندارد‌های سازگاری میکرومد:","about-codes-1":"✓ عدم نیاز به مفسر یا موتورهای پاکسازی سنگین.","about-codes-2":"✓ بهینه‌سازی کدهای سخت‌افزاری بدون تحمیل پردازش اضافی.","about-codes-3":"✓ تفکیک گالوانیک کامل برای ورودی سنسورهای بسیار حساس.","about-team-title":"نقشه راه ارتباطی اعضای تیم","about-team-desc":"مانند یک مدار مجتمع، ساختار سازمانی ما بر اساس واحدهای پردازشی هماهنگ و دقیق عمل می‌کند. برای مشاهده مهارت‌های هر بخش روی گره‌ها کلیک کنید.","team-cell-1":"[CELL_01]: واحد طراحی و جانمایی سیلیکون","team-cell-2":"[CELL_02]: مهندسی هسته میان‌افزار Rust","team-cell-3":"[CELL_03]: واحد اعتبارسنجی و شبیه‌سازی HIL","team-read-specs-btn":"مشاهده جزییات تخصصی ►","team-readout-placeholder":"جهت دریافت جزییات تیم فنی، بر روی یکی از سلول‌های سخت‌افزاری بالا کلیک کنید.","team-silicon-title":"CELL_01: واحد طراحی سیلیکون و برد چاپی","team-silicon-desc":"معماران ارشد سخت‌افزاری با تخصص بالا در بهینه‌سازی فضایی لایه‌های مدارات چاپی پیچیده، طراحی خطوط انتقال فرکانس بالا، مسیرهای ایزولاسیون حرارتی و رعایت استانداردهای تجهیزات گرید پزشکی.","team-firmware-title":"CELL_02: هسته مهندسی میان‌افزار نهفته","team-firmware-desc":"متخصصان برنامه‌نویسی بلادرنگ برای سیستم‌های سخت‌افزاری بدون استفاده از سیستم‌عامل‌های متداول. کدهای ما مستقیماً به کدهای ماشین تبدیل شده و عملکرد بدون خطای سیستم را تضمین می‌کنند.","team-validation-title":"CELL_03: تیم اعتبارسنجی و شبیه‌سازی HIL","team-validation-desc":"شبیه‌سازی رفتارهای سنسوری و بارهای الکتریکی بردهای نهایی. این فرآیند به ما اجازه می‌دهد قبل از مونتاژ واقعی، رفتار مدار را در مقابل نوسانات شدید شبیه‌سازی نماییم.","dir-spec-title":"ثبات‌های مشخصات فنی بردهای چاپی","dir-spec-desc":"فهرست نقشه‌های مهندسی میکرومد را بررسی کنید. برای دریافت برگه‌های اطلاعات فنی تخصصی، بر روی دکمه بردهای زیر کلیک کنید:","dir-status-active":"[ فعال ]","dir-status-locked":"[ قفل شده ]","uplink-title":"اتصال به درگاه امن مکاتبات مهندسی","uplink-desc":"مدیران تدارکات و کارشناسان فنی سازندگان تجهیزات آزمایشگاهی می‌توانند جهت ثبت سفارشات برد الکترونیکی سفارشی، با شبکه ما ارتباط برقرار کنند.","uplink-params-header":"وضعیت سیستم فرستنده ارتباطات:","uplink-params-1":"✓ امنیت: رمزگذاری نامتقارن با کلیدهای اختصاصی","uplink-params-2":"✓ زمان پاسخگویی و ارائه شبیه‌سازی اولیه: کمتر از ۲۴ ساعت","uplink-params-3":"✓ تاییدیه صلاحیت فنی مهندسان: سطح دسترسی ۴","form-label-company":"شناسه سازمانی شرکت خریدار (OEM)","form-label-email":"آدرس پست الکترونیکی ارتباطی امن","form-label-specs":"پارامترهای عملکردی و نیازمندی‌های سخت‌افزاری برد سفارشی","form-submit-btn":"ارسال کدهای تله‌متری و مشخصات مدار","success-headline":"بسته اطلاعاتی به گذرگاه ارسال شد [🟢]","success-log-1":"> ایجاد ارتباط رمزگذاری شده نامتقارن... موفقیت‌آمیز","success-log-2":"> گردآوری مشخصات فنی برد سفارشی... پایان یافت","success-log-3":"> مسیریابی به کدهای آی‌پی تدارکات: شبکه ایمن","success-log-4":"> پارامترها در ثبات‌های حافظه نوشته شدند.","success-desc":"بسته مشخصات سخت‌افزاری شما با موفقیت دریافت شد. کارشناسان مهندسی میکرومد به زودی برای ارزیابی مدار نهایی با شما تماس خواهند گرفت.","success-dismiss":"[ پاکسازی ثبات‌های خطا ]","footer-text":"سیستم‌های فناوری میکرومد // پایداری کدهای حافظه و مدارات تایید شد","footer-metric":"حساسیت کانال فرکانس: پایدار"}},ae={en:{"MM-TC-01":`
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
            `,"MM-MC-04":`
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
            `,"MM-ISO-02":`
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
            `},fa:{"MM-TC-01":`
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
            `,"MM-MC-04":`
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
            `,"MM-ISO-02":`
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
            `}},R={translations:ne,datasheetTemplates:ae},oe=R.datasheetTemplates,G=R.translations;function H(){const t=document.getElementById("datasheetContent"),e=document.getElementById("datasheetDesignator");t&&(t.innerHTML=oe[u][z]||""),e&&(e.innerText=`DATASHEET // ${z}`)}function ie(t){d(659.25,.05),te(t),["MM-TC-01","MM-MC-04","MM-ISO-02"].forEach(s=>{const o=document.getElementById(`btn-prod-${s}`);if(o){o.classList.remove("border-emerald-500","bg-emerald-950/20","text-[#00ff66]"),o.classList.add("border-emerald-950","text-emerald-600");const a=o.querySelector("span:last-child");a&&(a.innerText=G[u]["dir-status-locked"],a.className="text-[9px] text-gray-500")}});const n=document.getElementById(`btn-prod-${t}`);if(n){n.classList.add("border-emerald-500","bg-emerald-950/20","text-[#00ff66]"),n.classList.remove("border-emerald-950","text-emerald-600");const s=n.querySelector("span:last-child");s&&(s.innerText=G[u]["dir-status-active"],s.className="text-[9px] text-[#00ff66] font-bold")}H()}let T=[];function X(){const t=document.getElementById("pcbBackgroundCanvas");if(!t)return;T=[];const e=t.width,n=t.height,s=document.documentElement.getAttribute("dir")==="rtl",o=l=>s?e-l:l;function a(l,c,r,f,p){for(let m=0;m<r;m++){const g=[];let x=l+m*f,C=c;g.push({x:o(x),y:C});for(const A of p){let S=A.angle;s&&(S=(180-S+360)%360);const Y=S*Math.PI/180;x+=A.length*Math.cos(Y),C+=A.length*Math.sin(Y),g.push({x:o(x),y:C})}T.push({points:g,color:"#00ff66",width:1.5,pulseProgress:Math.random()})}}a(e*.18,0,6,14,[{angle:90,length:n*.12},{angle:135,length:60},{angle:90,length:n*.14}]),a(e*.05,n*.35,8,10,[{angle:0,length:e*.12},{angle:45,length:80},{angle:0,length:e*.1}]),a(e*.85,0,4,16,[{angle:90,length:n*.1},{angle:225,length:70},{angle:180,length:e*.08}]),a(e*.65,n*.2,7,12,[{angle:180,length:e*.1},{angle:135,length:90},{angle:180,length:e*.08}]),a(e*.48,n,4,20,[{angle:270,length:n*.16},{angle:315,length:110},{angle:270,length:n*.1}]),a(e*.12,n,5,12,[{angle:270,length:n*.14},{angle:225,length:80},{angle:270,length:n*.12}]),a(e*.78,n,9,8,[{angle:270,length:n*.18},{angle:225,length:90},{angle:270,length:n*.08}]),[{x:e*.08,y:n*.15,d:[{angle:45,length:50},{angle:0,length:70}]},{x:e*.9,y:n*.5,d:[{angle:135,length:60},{angle:180,length:80}]},{x:e*.28,y:n*.82,d:[{angle:315,length:70},{angle:0,length:60}]},{x:e*.72,y:n*.32,d:[{angle:135,length:50},{angle:180,length:50}]},{x:e*.15,y:n*.65,d:[{angle:45,length:80},{angle:90,length:40}]}].forEach(l=>{const c=[];let r=l.x,f=l.y;c.push({x:o(r),y:f});for(const p of l.d){let m=p.angle;s&&(m=(180-m+360)%360);const g=m*Math.PI/180;r+=p.length*Math.cos(g),f+=p.length*Math.sin(g),c.push({x:o(r),y:f})}T.push({points:c,color:"#00ff66",width:1.6,pulseProgress:Math.random()})})}function $(){const t=document.getElementById("pcbBackgroundCanvas");t&&(t.width=window.innerWidth,t.height=window.innerHeight,X())}function K(){const t=document.getElementById("pcbBackgroundCanvas"),e=t?t.getContext("2d"):null;if(!t||!e)return;e.clearRect(0,0,t.width,t.height),e.strokeStyle="rgba(0, 255, 102, 0.02)",e.lineWidth=.5;const n=40;for(let s=0;s<t.width;s+=n)e.beginPath(),e.moveTo(s,0),e.lineTo(s,t.height),e.stroke();for(let s=0;s<t.height;s+=n)e.beginPath(),e.moveTo(0,s),e.lineTo(t.width,s),e.stroke();T.forEach(s=>{if(s.points.length===0)return;e.beginPath(),e.moveTo(s.points[0].x,s.points[0].y);for(let p=1;p<s.points.length;p++)e.lineTo(s.points[p].x,s.points[p].y);e.strokeStyle="rgba(0, 255, 102, 0.08)",e.lineWidth=5,e.stroke(),e.strokeStyle="rgba(0, 255, 102, 0.35)",e.lineWidth=s.width,e.stroke();const o=s.points[s.points.length-1];e.beginPath(),e.arc(o.x,o.y,4.5,0,Math.PI*2),e.fillStyle="#0a0c0d",e.strokeStyle="#00ff66",e.lineWidth=1.5,e.fill(),e.stroke(),s.pulseProgress+=.003,s.pulseProgress>=1&&(s.pulseProgress=0);const a=s.points.length-1,i=1/a,l=Math.min(Math.floor(s.pulseProgress/i),a-1),c=s.pulseProgress%i/i,r=s.points[l],f=s.points[l+1];if(r&&f){const p=r.x+(f.x-r.x)*c,m=r.y+(f.y-r.y)*c;e.beginPath(),e.arc(p,m,2.5,0,Math.PI*2),e.fillStyle="#00ff66",e.shadowColor="#00ff66",e.shadowBlur=8,e.fill(),e.shadowBlur=0}}),requestAnimationFrame(K)}const _=R.translations;function le(){document.querySelectorAll("[data-key]").forEach(e=>{const n=e.getAttribute("data-key");n&&_[u][n]&&(e.innerHTML=_[u][n])})}function re(){B(),Z(u==="en"?"fa":"en");const t=document.documentElement,e=document.getElementById("langToggle"),n=document.getElementById("start-title"),s=document.getElementById("start-target"),o=document.getElementById("start-load");u==="fa"?(t.setAttribute("dir","rtl"),t.setAttribute("lang","fa"),e&&(e.innerText="[ JUMPER: FA ]"),n&&(n.innerText="واحد مدیریت پروتکل‌های سخت‌افزاری میکرومد // آماده به کار"),s&&(s.innerText="معماری مدارهای چاپی: سبک مینیمال و فرکانس بالا"),o&&(o.innerText="درحال آماده‌سازی سیستم و بوردها...")):(t.setAttribute("dir","ltr"),t.setAttribute("lang","en"),e&&(e.innerText="[ JUMPER: EN ]"),n&&(n.innerText="MICROMED MASTER CONTROL PROTOCOLS // READY"),s&&(s.innerText="TARGET ARCHITECTURE: ULTRA-GLOW MINIMAL DESIGNATORS"),o&&(o.innerText="BOOTSTRAPPING MAINBOARD REGISTERS [99%]")),d(880,.08),setTimeout(()=>d(1100,.1),100),le(),H();const a=document.getElementById("teamReadout");a&&(a.innerHTML=`
      <span class="text-emerald-700 block text-[9px] font-bold">U1_CELL_READOUT</span>
      <p class="text-emerald-100/60 mt-1">${_[u]["team-readout-placeholder"]}</p>
    `),X()}const ce={"blue-pill":{vertices:[{x:-50,y:-3,z:-100},{x:50,y:-3,z:-100},{x:50,y:-3,z:100},{x:-50,y:-3,z:100},{x:-20,y:-8,z:-20},{x:20,y:-8,z:-20},{x:20,y:-8,z:20},{x:-20,y:-8,z:20},{x:-15,y:-10,z:-105},{x:15,y:-10,z:-105},{x:15,y:-3,z:-95},{x:-15,y:-3,z:-95},{x:-8,y:-6,z:50},{x:8,y:-6,z:50},{x:8,y:-3,z:70},{x:-8,y:-3,z:70}],lines:[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[8,9],[9,10],[10,11],[11,8],[12,13],[13,14],[14,15],[15,12]]},esp32:{vertices:[{x:-60,y:-3,z:-90},{x:60,y:-3,z:-90},{x:60,y:-3,z:90},{x:-60,y:-3,z:90},{x:-25,y:-8,z:-40},{x:25,y:-8,z:-40},{x:25,y:-8,z:30},{x:-25,y:-8,z:30},{x:-18,y:-8,z:-95},{x:18,y:-8,z:-95},{x:18,y:-3,z:-85},{x:-18,y:-3,z:-85},{x:-45,y:-6,z:-75},{x:-35,y:-6,z:-75},{x:-35,y:-3,z:-65},{x:-45,y:-3,z:-65}],lines:[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[8,9],[9,10],[10,11],[11,8],[12,13],[13,14],[14,15],[15,12]]},triac:{vertices:[{x:-30,y:-45,z:-10},{x:30,y:-45,z:-10},{x:30,y:15,z:-10},{x:-30,y:15,z:-10},{x:-30,y:-45,z:-25},{x:30,y:-45,z:-25},{x:30,y:15,z:-25},{x:-30,y:15,z:-25},{x:-28,y:-45,z:-26},{x:28,y:-45,z:-26},{x:28,y:-75,z:-26},{x:-28,y:-75,z:-26},{x:-20,y:15,z:-17},{x:-20,y:75,z:-17},{x:0,y:15,z:-17},{x:0,y:75,z:-17},{x:20,y:15,z:-17},{x:20,y:75,z:-17}],lines:[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7],[8,9],[9,10],[10,11],[11,8],[12,13],[14,15],[16,17]]},transistor:{vertices:[{x:-20,y:-30,z:-10},{x:20,y:-30,z:-10},{x:20,y:20,z:-10},{x:-20,y:20,z:-10},{x:-15,y:-30,z:-25},{x:15,y:-30,z:-25},{x:15,y:20,z:-25},{x:-15,y:20,z:-25},{x:-15,y:20,z:-15},{x:-15,y:70,z:-15},{x:0,y:20,z:-15},{x:0,y:70,z:-15},{x:15,y:20,z:-15},{x:15,y:70,z:-15}],lines:[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7],[8,9],[10,11],[12,13]]},diode:{vertices:[{x:-15,y:-15,z:-40},{x:15,y:-15,z:-40},{x:15,y:15,z:-40},{x:-15,y:15,z:-40},{x:-15,y:-15,z:40},{x:15,y:-15,z:40},{x:15,y:15,z:40},{x:-15,y:15,z:40},{x:-15,y:-15,z:-20},{x:15,y:-15,z:-20},{x:15,y:15,z:-20},{x:-15,y:15,z:-20},{x:0,y:0,z:-40},{x:0,y:0,z:-95},{x:0,y:0,z:40},{x:0,y:0,z:95}],lines:[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7],[8,9],[9,10],[10,11],[11,8],[12,13],[14,15]]}};function de(){D(!M);const t=document.getElementById("holoOrbitBtn");t&&(t.innerText=M?"AUTO_ROT: ON":"AUTO_ROT: OFF"),d(659.25,.05)}function pe(t){d(784,.06),ee(t),["blue-pill","esp32","triac","transistor","diode"].forEach(o=>{const a=document.getElementById(`btn-holo-${o}`);a&&(a.className="py-1.5 px-2 text-[9px] font-mono border border-emerald-900 text-emerald-600 hover:border-cyan-500 hover:text-cyan-400")});const n=document.getElementById(`btn-holo-${t}`);n&&(n.className="py-1.5 px-2 text-[9px] font-mono border border-cyan-500 bg-cyan-950/20 text-[#00f3ff] font-bold");const s=document.getElementById("holoModelName");s&&(s.innerText=`MM-${t.toUpperCase()}`)}function j(){const t=document.getElementById("hologramViewer3D");t&&t.parentElement&&(t.width=t.parentElement.clientWidth,t.height=t.parentElement.clientHeight||240)}function L(t,e,n,s,o){const a=Math.cos(h),i=Math.sin(h),l=t*a-n*i,c=t*i+n*a,r=Math.cos(y),f=Math.sin(y),p=e*r-c*f,m=e*f+c*r,g=320,x=g/(g+m);return{x:s/2+l*x*U,y:o/2+p*x*U,scale:x}}function J(){const t=document.getElementById("hologramViewer3D"),e=t?t.getContext("2d"):null;if(!t||!e)return;e.clearRect(0,0,t.width,t.height);const n=t.width,s=t.height;M&&N(h+.008);const o=ce[q];if(o){e.strokeStyle="rgba(0, 243, 255, 0.02)",e.lineWidth=1;for(let a=50;a<=200;a+=50)e.beginPath(),e.arc(n/2,s/2+20,a,0,Math.PI*2),e.stroke();e.strokeStyle="#00f3ff",e.lineWidth=1.4,o.lines.forEach(a=>{const i=o.vertices[a[0]],l=o.vertices[a[1]];if(i&&l){const c=L(i.x,i.y,i.z,n,s),r=L(l.x,l.y,l.z,n,s);e.beginPath(),e.moveTo(c.x,c.y),e.lineTo(r.x,r.y),e.strokeStyle=`rgba(0, 243, 255, ${Math.min(1,.2+c.scale*.7)})`,e.stroke()}}),o.vertices.forEach(a=>{const i=L(a.x,a.y,a.z,n,s);e.fillStyle="#00ff66",e.beginPath(),e.arc(i.x,i.y,3*i.scale,0,Math.PI*2),e.fill()})}requestAnimationFrame(J)}function fe(){const t=document.getElementById("hologramViewer3D");t&&(t.addEventListener("mousedown",e=>{v(!0),D(!1),E(e.clientX),w(e.clientY)}),window.addEventListener("mouseup",()=>{v(!1)}),t.addEventListener("mousemove",e=>{if(!O)return;const n=e.clientX-P,s=e.clientY-k;N(h+n*.01);let o=y+s*.01;o=Math.max(-Math.PI/2+.1,Math.min(Math.PI/2-.1,o)),F(o),E(e.clientX),w(e.clientY);const a=document.getElementById("holoYaw"),i=document.getElementById("holoPitch");a&&(a.innerText=h.toFixed(2)),i&&(i.innerText=y.toFixed(2))}),t.addEventListener("touchstart",e=>{e.touches.length!==0&&(v(!0),D(!1),E(e.touches[0].clientX),w(e.touches[0].clientY))}),t.addEventListener("touchend",()=>{v(!1)}),t.addEventListener("touchmove",e=>{if(!O||e.touches.length===0)return;const n=e.touches[0],s=n.clientX-P,o=n.clientY-k;N(h+s*.015);let a=y+o*.015;a=Math.max(-Math.PI/2+.1,Math.min(Math.PI/2-.1,a)),F(a),E(n.clientX),w(n.clientY)}))}function me(t){d(440,.06),setTimeout(()=>d(880,.06),60),["addr-gateway","addr-identity","addr-directory","addr-uplink"].forEach(o=>{const a=document.getElementById(o);a&&a.classList.add("hidden");const i=document.getElementById(`btn-${o}`);i&&(i.classList.remove("border-emerald-500","bg-emerald-950/30","text-[#00ff66]"),i.classList.add("border-emerald-950","text-emerald-600"))});const n=document.getElementById(t);n&&n.classList.remove("hidden");const s=document.getElementById(`btn-${t}`);s&&(s.classList.add("border-emerald-500","bg-emerald-950/30","text-[#00ff66]"),s.classList.remove("border-emerald-950","text-emerald-600")),t==="addr-gateway"&&setTimeout(j,50)}const V=R.translations;function ue(t){d(523.25,.06),setTimeout(()=>d(659.25,.06),60);const e=`team-${t}-title`,n=`team-${t}-desc`,s=document.getElementById("teamReadout");s&&(s.innerHTML=`
      <span class="text-[#00ff66] block text-[9px] font-bold font-silkscreen">${V[u][e]}</span>
      <p class="text-emerald-100/80 mt-1 leading-relaxed">${V[u][n]}</p>
    `)}function be(t){t.preventDefault(),d(587.33,.1),setTimeout(()=>d(880,.18),120);const e=document.getElementById("formSuccessMessage");e&&e.classList.remove("hidden")}function ge(){d(440,.06);const t=document.getElementById("formSuccessMessage");t&&t.classList.add("hidden");const e=document.getElementById("pcbContractForm");e&&e.reset()}const W=["> Mapping spatial substrate trace configurations... SUCCESS","> Aligning multi-layer copper impedance vectors... MATCHED [50 OHM]","> Booting bare-metal real-time scheduler registers... ACTIVE","> Loading medical device safety protocols (IEC 60601-1)... LOADED","> Calibrating cold-junction temperature sensors... READY","> Linking custom FOC motor velocity engines... BOUNDED","> Launching 3D Hologram projection gateway..."];function xe(){const t=document.getElementById("startupLog"),e=document.getElementById("startupScreen");if(!t||!e)return;const n=t,s=e;let o=0;function a(){if(o<W.length){const i=document.createElement("div");i.innerText=W[o],n.appendChild(i),n.scrollTop=n.scrollHeight,o++,setTimeout(a,200+Math.random()*200)}else setTimeout(()=>{s.style.transition="opacity 0.5s ease-out",s.style.opacity="0",setTimeout(()=>{s.classList.add("hidden")},500)},400)}setTimeout(a,400)}window.toggleLanguage=re;window.routeTo=me;window.selectTeamNode=ue;window.handleContractSubmission=be;window.dismissFormNotification=ge;window.playHardwareTone=d;window.toggleMainboardAudio=se;window.selectProduct=ie;window.selectHoloModel=pe;window.toggleHoloOrbit=de;document.addEventListener("DOMContentLoaded",()=>{$(),j(),J(),fe(),H(),xe(),K();const t=document.getElementById("firmwareFreq");t&&setInterval(()=>{const e=(16+Math.random()*.005).toFixed(4);t.innerText=`${e} MHz`},1200)});window.addEventListener("resize",()=>{$(),j()});
