(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();const W={en:{"header-desc":"EMBEDDED HARDWARE CONTRACTING CELL // SYSTEM ARCHITECTURE BUS","sys-bus-link-status":"<span class='w-1.5 h-1.5 bg-[#00ff66] rounded-full inline-block animate-pulse'></span> IMPEDANCE_MATCHED","nav-register-label":"SYSTEM_BUS_ROUTING_REGISTER","nav-gateway":"[0x00] CORE_GATEWAY","nav-identity":"[0x01] ORG_IDENTITY","nav-directory":"[0x02] HW_DIRECTORY","nav-uplink":"[0x03] SECURE_UPLINK","gateway-matrix-prefix":"[!] HARDWARE VALIDATION MATRIX","gateway-matrix-suffix":"REGISTER ADDR_0x00 ONLINE","gateway-hero-title":"Architecting safe silicon logic for mission-critical medical & laboratory environments.","gateway-hero-desc":"We are elite electronic engineering contractors specializing in the end-to-end design, testing, and production optimization of multi-layer controller boards. Our team does not build consumer hardware; we develop the vital brain components (harnessing safe, bare-metal Rust firmware) for original equipment manufacturers (OEMs) producing precision temperature-controlled health incubators, food-safety diagnostic ovens, and high-RPM mixing engines.","spec-label-thermal":"THERMO_MATRIX","spec-val-thermal":"0.0001°C RESOLUTION","spec-desc-thermal":"> Multi-channel cold-junction","spec-label-velocity":"VELOCITY_VECTOR","spec-val-velocity":"3-PHASE SENSORLESS FOC","spec-desc-velocity":"> Closed-loop torque profiling","spec-label-isolation":"ISOLATION_BARRIER","spec-val-isolation":"GALVANIC ISOLATION 3.75kV","spec-desc-isolation":"> IEC 60601-1 Medical compliant","summary-header":"HARDWARE SUMMARY","summary-subheader":"Expand standard architecture pipelines:","summary-cap1-title":"[REG_01] HIGH-DENSITY INTERCONNECT","summary-cap1-desc":"Multi-layer high frequency PCB development (up to 12 layers) with micro-vias, blind/buried pathways, and controlled trace impedance preventing high-frequency cross-talk.","summary-cap2-title":"[REG_02] EMBEDDED RUST FIRMWARE","summary-cap2-desc":"Bare-metal embedded Rust configurations. Complete memory protection vectors with zero runtime memory manager (no_std architecture), mitigating race conditions.","summary-cap3-title":"[REG_03] HARSH ENVIRONMENT TESTING","summary-cap3-desc":"Simulating load failures, heat dissipation profiles, and hardware-in-the-loop validation using custom signal simulation equipment designed directly in-house.","flows-header":"SYSTEM ARCHITECTURE FLOWS","flows-desc":"Click hardware nodes below to execute diagnostic address switching.","flows-btn1":"ORGANIZATIONAL LAB","flows-btn1-sub":"> Core design protocols","flows-btn2":"PROPRIETARY PRODUCTS","flows-btn2-sub":"> Technical datasheets","flows-btn3":"SECURE CONNECTIONS","flows-btn3-sub":"> Fast contracting bus","about-hero-header":"DETERMINISTIC SECURITY & SAFETY BY DESIGN","about-hero-body":`
                  <p>In high-stakes laboratory and medical hardware, firmware failure is not a minor inconvenience—it is a catastrophic risk. If an incubator's temperature variance spikes during stem-cell cultivation or if a mixer engine exceeds safety speed thresholds, entire pipelines fail and research is destroyed.</p>
                  <p>At Micromed, we mitigate these vectors using **Deterministic Design Engineering**. Our hardware relies on mathematical guarantees. By using bare-metal, no_std **Rust systems-programming architecture**, we eliminate memory allocation leaks, race conditions, and undefined behavior at compile-time.</p>
                  <p>Our boards run without a heavyweight operating system layer (no Windows, no Linux). Instead, they utilize robust Real-Time Interrupt Driven Concurrency (RTIC) task managers to interface directly with ARM Cortex-M processors.</p>
              `,"about-codes-header":"THE MICROMED COMPLIANCE CODES:","about-codes-1":"✓ Complete lack of garbage-collector latency vectors.","about-codes-2":"✓ Strict zero-cost hardware boundary abstractions.","about-codes-3":"✓ Full galvanic isolation separation standards across all sensitive buses.","about-team-title":"TEAM METASTATE BLUEPRINT","about-team-desc":"Like an integrated circuit, our organizational architecture operates via synchronized, deterministic processing blocks. Click any functional group node below to interrogate credentials.","team-cell-1":"[CELL_01]: SILICON_DESIGN_NODE","team-cell-2":"[CELL_02]: EMBEDDED_RUST_CORE","team-cell-3":"[CELL_03]: HIL_STRESS_VALIDATION","team-read-specs-btn":"READ SPECS ►","team-readout-placeholder":"Select an organizational cell above to map team pipelines, technical credentials, and active system operations.","team-silicon-title":"CELL_01: SILICON_DESIGN_NODE","team-silicon-desc":"Lead Hardware Architects managing spatial optimization profiles, high-frequency trace routing, galvanic isolation pathways, and multi-layer stack parameters (up to 12 layers) matching extreme environmental medical standards.","team-firmware-title":"CELL_02: EMBEDDED_RUST_CORE","team-firmware-desc":"Systems level engineers implementing uncompromised, bare-metal Rust configurations with zero-cost bounds wrappers. No heap managers, completely deterministic task dispatchers preventing CPU lag during physical critical events.","team-validation-title":"CELL_03: HIL_STRESS_VALIDATION","team-validation-desc":"HIL (Hardware-In-The-Loop) design specialists simulating sensor feedback inputs, sudden motor lockouts, environmental overload thresholds, and voltage oscillations on test rigs built entirely in-house.","dir-spec-title":"SPEC_REGISTERS","dir-spec-desc":"Query proprietary Micromed hardware blueprints. Select a model register to output high-fidelity data sheets directly from our firmware files:","dir-status-active":"[ ACTIVE ]","dir-status-locked":"[ LOCKED ]","uplink-title":"SECURE HARDWARE HANDSHAKE","uplink-desc":"Procurement managers and technical system architects can initiate a direct data bus uplink to request hardware contracting or embedded firmware optimization projects.","uplink-params-header":"ACTIVE TRANSMITTER CHANNEL PARAMS:","uplink-params-1":"✓ CONFIG: PGP COMPLIANT ENCRYPTION MATRIX","uplink-params-2":"✓ SCHEMATIC DISPATCH TIMELINE: < 24 HOURS","uplink-params-3":"✓ TECHNICAL ACCESS CLEARANCE: LEVEL_4 APPROVED","form-label-company":"OEM_COMPANY_IDENTIFIER","form-label-email":"SECURE_COM_ROUTING","form-label-specs":"BOARD_SPECS_AND_TELEMETRY_PARAMETERS","form-submit-btn":"ESTABLISH DATA BUS MATRIX //","success-headline":"UPLINK PACKET DEPLOYED [🟢]","success-log-1":"> Initiating RSA handshakes (MM-4096-B)... SUCCESS","success-log-2":"> Compiling specifications block... COMPLETED","success-log-3":"> Routing telemetry packets: IP_COM_SECURED","success-log-4":"> Data bus written to memory array blocks.","success-desc":"Hardware contracting packet received successfully. A systems engineering contractor stands notified to analyze physical parameters.","success-dismiss":"[ CLEAR_LOG_REGISTERS ]","footer-text":"MICROMED TECHNOLOGY SYSTEMS // CORE MEMORY REG REGISTERS OPERATIONAL","footer-metric":"TRACE_SENSITIVITY: HI-FI"},fa:{"header-desc":"بخش قراردادهای مهندسی سخت‌افزار نهفته // گذرگاه سیستم اتصالات","sys-bus-link-status":"<span class='w-1.5 h-1.5 bg-[#00ff66] rounded-full inline-block animate-pulse'></span> امپدانس_تنظیم_شده","nav-register-label":"ثبات‌های_مسیریابی_گذرگاه_سیستم","nav-gateway":"[0x00] درگاه_اصلی_شبکه","nav-identity":"[0x01] هویت_سازمانی","nav-directory":"[0x02] کاتالوگ_محصولات","nav-uplink":"[0x03] ارتباطات_ایمن","gateway-matrix-prefix":"[!] ماتریس اعتبارسنجی قطعات سخت‌افزاری","gateway-matrix-suffix":"آدرس ثبت بورد 0x00 در دسترس است","gateway-hero-title":"مهندسی و طراحی مدارهای منطقی با ایمنی بالا برای تجهیزات پزشکی و آزمایشگاهی حساس.","gateway-hero-desc":"تیم ما متشکل از مهندسان الکترونیک متخصص در طراحی، شبیه‌سازی و بهینه‌سازی تولید بردهای چندلایه می‌باشد. ما محصولات مصرفی تولید نمی‌کنیم؛ تخصص ما توسعه هسته‌های پردازشی امن (با استفاده از زبان برنامه‌نویسی بلادرنگ و بدون سیستم‌عامل Rust) برای سازندگان سیستم‌های کنترل دما، فرهای آزمایشگاهی مواد غذایی و همزن‌های دور بالا است.","spec-label-thermal":"کنترلر_حرارتی","spec-val-thermal":"دقت سنجش ۰.۰۰۰۱ درجه","spec-desc-thermal":"> سنسور دقیق جبران‌ساز دمایی","spec-label-velocity":"بردار_سرعت_موتور","spec-val-velocity":"سیستم پیشرفته ۳ فاز بدون سنسور","spec-desc-velocity":"> بهینه‌سازی مداوم نمودار گشتاور موتور","spec-label-isolation":"مانع_ایزولاسیون","spec-val-isolation":"ایزولاسیون کامل تا ۳.۷۵ کیلوولت","spec-desc-isolation":"> استاندارد پزشکی IEC 60601-1","summary-header":"خلاصه وضعیت بوردها","summary-subheader":"مسیرهای فرعی مدار چاپی:","summary-cap1-title":"[ثبات ۰۱] طراحی مدار فرکانس بالا","summary-cap1-desc":"طراحی بردهای چندلایه (تا ۱۲ لایه) به همراه کانال‌های ارتباطی کور و مدفون با امپدانس فیزیکی دقیق برای مهار تداخل فرکانسی.","summary-cap2-title":"[ثبات ۰۲] برنامه‌نویسی نهفته Rust","summary-cap2-desc":"کدهای میان‌افزار بلادرنگ بدون تخصیص پویای حافظه (ساختار no_std) جهت به حداقل رساندن تداخل زمان اجرا.","summary-cap3-title":"[ثبات ۰۳] تست سناریوهای بحرانی","summary-cap3-desc":"شبیه‌سازی نوسانات فیزیکی و رفتارهای قطعات قبل از مونتاژ نهایی در محیط‌های آزمایشگاهی پیشرفته.","flows-header":"گذرگاه‌های ارتباطی سیستم","flows-desc":"برای تغییر آدرس‌های تله‌متری، روی گره‌های مدار زیر کلیک کنید.","flows-btn1":"واحد مهندسی آزمایشگاهی","flows-btn1-sub":"> شیوه‌های طراحی پایه","flows-btn2":"ثبات قطعات سخت‌افزاری","flows-btn2-sub":"> نقشه‌های فنی و کاتالوگ","flows-btn3":"ارتباط امن با هسته","flows-btn3-sub":"> گذرگاه تبادل اطلاعات سریع","about-hero-header":"امنیت تضمین‌شده و معماری فیزیکی پایدار","about-hero-body":`
                  <p>در تجهیزات پیشرفته پزشکی و بیمارستانی، خرابی میان‌افزارها یک مشکل ساده نیست بلکه خطری جانی و مالی است. تغییر ناگهانی دمای انکوباتورهای نگهداری سلول‌های بنیادی یا چرخش خارج از محدوده موتورهای سانتریفیوژ، تحقیقات علمی چندساله را به طور کامل نابود می‌کند.</p>
                  <p>تیم میکرومد با استفاده از <strong>طراحی سیستم‌های قطعی ریاضی</strong> خطرات ناشی از کدهای نامطمئن را از بین می‌برد. با تکیه بر کدهای بهینه‌سازی شده زبان برنامه‌نویسی Rust، احتمال سرریز داده، نشت حافظه و رفتارهای نامعلوم نرم‌افزاری در زمان کامپایل کاملاً برطرف می‌گردد.</p>
                  <p>کدهای ما مستقیماً روی پردازنده‌های ARM Cortex-M اجرا شده و به سیستم‌عامل‌های سنگین وابستگی ندارند که پایداری حداکثری سیستم را در شرایط نوسان شدید جریان تضمین می‌کند.</p>
              `,"about-codes-header":"استاندارد‌های سازگاری میکرومد:","about-codes-1":"✓ عدم نیاز به مفسر یا موتورهای پاکسازی سنگین.","about-codes-2":"✓ بهینه‌سازی کدهای سخت‌افزاری بدون تحمیل پردازش اضافی.","about-codes-3":"✓ تفکیک گالوانیک کامل برای ورودی سنسورهای بسیار حساس.","about-team-title":"نقشه راه ارتباطی اعضای تیم","about-team-desc":"مانند یک مدار مجتمع، ساختار سازمانی ما بر اساس واحدهای پردازشی هماهنگ و دقیق عمل می‌کند. برای مشاهده مهارت‌های هر بخش روی گره‌ها کلیک کنید.","team-cell-1":"[CELL_01]: واحد طراحی و جانمایی سیلیکون","team-cell-2":"[CELL_02]: مهندسی هسته میان‌افزار Rust","team-cell-3":"[CELL_03]: واحد اعتبارسنجی و شبیه‌سازی HIL","team-read-specs-btn":"مشاهده جزییات تخصصی ►","team-readout-placeholder":"جهت دریافت جزییات تیم فنی، بر روی یکی از سلول‌های سخت‌افزاری بالا کلیک کنید.","team-silicon-title":"CELL_01: واحد طراحی سیلیکون و برد چاپی","team-silicon-desc":"معماران ارشد سخت‌افزاری با تخصص بالا در بهینه‌سازی فضایی لایه‌های مدارات چاپی پیچیده، طراحی خطوط انتقال فرکانس بالا، مسیرهای ایزولاسیون حرارتی و رعایت استانداردهای تجهیزات گرید پزشکی.","team-firmware-title":"CELL_02: هسته مهندسی میان‌افزار نهفته","team-firmware-desc":"متخصصان برنامه‌نویسی بلادرنگ برای سیستم‌های سخت‌افزاری بدون استفاده از سیستم‌عامل‌های متداول. کدهای ما مستقیماً به کدهای ماشین تبدیل شده و عملکرد بدون خطای سیستم را تضمین می‌کنند.","team-validation-title":"CELL_03: تیم اعتبارسنجی و شبیه‌سازی HIL","team-validation-desc":"شبیه‌سازی رفتارهای سنسوری و بارهای الکتریکی بردهای نهایی. این فرآیند به ما اجازه می‌دهد قبل از مونتاژ واقعی، رفتار مدار را در مقابل نوسانات شدید شبیه‌سازی نماییم.","dir-spec-title":"ثبات‌های مشخصات فنی بردهای چاپی","dir-spec-desc":"فهرست نقشه‌های مهندسی میکرومد را بررسی کنید. برای دریافت برگه‌های اطلاعات فنی تخصصی، بر روی دکمه بردهای زیر کلیک کنید:","dir-status-active":"[ فعال ]","dir-status-locked":"[ قفل شده ]","uplink-title":"اتصال به درگاه امن مکاتبات مهندسی","uplink-desc":"مدیران تدارکات و کارشناسان فنی سازندگان تجهیزات آزمایشگاهی می‌توانند جهت ثبت سفارشات برد الکترونیکی سفارشی، با شبکه ما ارتباط برقرار کنند.","uplink-params-header":"وضعیت سیستم فرستنده ارتباطات:","uplink-params-1":"✓ امنیت: رمزگذاری نامتقارن با کلیدهای اختصاصی","uplink-params-2":"✓ زمان پاسخگویی و ارائه شبیه‌سازی اولیه: کمتر از ۲۴ ساعت","uplink-params-3":"✓ تاییدیه صلاحیت فنی مهندسان: سطح دسترسی ۴","form-label-company":"شناسه سازمانی شرکت خریدار (OEM)","form-label-email":"آدرس پست الکترونیکی ارتباطی امن","form-label-specs":"پارامترهای عملکردی و نیازمندی‌های سخت‌افزاری برد سفارشی","form-submit-btn":"ارسال کدهای تله‌متری و مشخصات مدار","success-headline":"بسته اطلاعاتی به گذرگاه ارسال شد [🟢]","success-log-1":"> ایجاد ارتباط رمزگذاری شده نامتقارن... موفقیت‌آمیز","success-log-2":"> گردآوری مشخصات فنی برد سفارشی... پایان یافت","success-log-3":"> مسیریابی به کدهای آی‌پی تدارکات: شبکه ایمن","success-log-4":"> پارامترها در ثبات‌های حافظه نوشته شدند.","success-desc":"بسته مشخصات سخت‌افزاری شما با موفقیت دریافت شد. کارشناسان مهندسی میکرومد به زودی برای ارزیابی مدار نهایی با شما تماس خواهند گرفت.","success-dismiss":"[ پاکسازی ثبات‌های خطا ]","footer-text":"سیستم‌های فناوری میکرومد // پایداری کدهای حافظه و مدارات تایید شد","footer-metric":"حساسیت کانال فرکانس: پایدار"}},q={en:{"MM-TC-01":`
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
            `}},j={translations:W,datasheetTemplates:q};let b="en",g=null,A=!0,U="blue-pill",R=!0,C=.4,y=-.3;const H=1;let T=!1,M=0,I=0,P="MM-TC-01";const w=j.translations,X=j.datasheetTemplates,$={"blue-pill":{vertices:[{x:-50,y:-3,z:-100},{x:50,y:-3,z:-100},{x:50,y:-3,z:100},{x:-50,y:-3,z:100},{x:-20,y:-8,z:-20},{x:20,y:-8,z:-20},{x:20,y:-8,z:20},{x:-20,y:-8,z:20},{x:-15,y:-10,z:-105},{x:15,y:-10,z:-105},{x:15,y:-3,z:-95},{x:-15,y:-3,z:-95},{x:-8,y:-6,z:50},{x:8,y:-6,z:50},{x:8,y:-3,z:70},{x:-8,y:-3,z:70}],lines:[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[8,9],[9,10],[10,11],[11,8],[12,13],[13,14],[14,15],[15,12]]},esp32:{vertices:[{x:-60,y:-3,z:-90},{x:60,y:-3,z:-90},{x:60,y:-3,z:90},{x:-60,y:-3,z:90},{x:-25,y:-8,z:-40},{x:25,y:-8,z:-40},{x:25,y:-8,z:30},{x:-25,y:-8,z:30},{x:-18,y:-8,z:-95},{x:18,y:-8,z:-95},{x:18,y:-3,z:-85},{x:-18,y:-3,z:-85},{x:-45,y:-6,z:-75},{x:-35,y:-6,z:-75},{x:-35,y:-3,z:-65},{x:-45,y:-3,z:-65}],lines:[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[8,9],[9,10],[10,11],[11,8],[12,13],[13,14],[14,15],[15,12]]},triac:{vertices:[{x:-30,y:-45,z:-10},{x:30,y:-45,z:-10},{x:30,y:15,z:-10},{x:-30,y:15,z:-10},{x:-30,y:-45,z:-25},{x:30,y:-45,z:-25},{x:30,y:15,z:-25},{x:-30,y:15,z:-25},{x:-28,y:-45,z:-26},{x:28,y:-45,z:-26},{x:28,y:-75,z:-26},{x:-28,y:-75,z:-26},{x:-20,y:15,z:-17},{x:-20,y:75,z:-17},{x:0,y:15,z:-17},{x:0,y:75,z:-17},{x:20,y:15,z:-17},{x:20,y:75,z:-17}],lines:[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7],[8,9],[9,10],[10,11],[11,8],[12,13],[14,15],[16,17]]},transistor:{vertices:[{x:-20,y:-30,z:-10},{x:20,y:-30,z:-10},{x:20,y:20,z:-10},{x:-20,y:20,z:-10},{x:-15,y:-30,z:-25},{x:15,y:-30,z:-25},{x:15,y:20,z:-25},{x:-15,y:20,z:-25},{x:-15,y:20,z:-15},{x:-15,y:70,z:-15},{x:0,y:20,z:-15},{x:0,y:70,z:-15},{x:15,y:20,z:-15},{x:15,y:70,z:-15}],lines:[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7],[8,9],[10,11],[12,13]]},diode:{vertices:[{x:-15,y:-15,z:-40},{x:15,y:-15,z:-40},{x:15,y:15,z:-40},{x:-15,y:15,z:-40},{x:-15,y:-15,z:40},{x:15,y:-15,z:40},{x:15,y:15,z:40},{x:-15,y:15,z:40},{x:-15,y:-15,z:-20},{x:15,y:-15,z:-20},{x:15,y:15,z:-20},{x:-15,y:15,z:-20},{x:0,y:0,z:-40},{x:0,y:0,z:-95},{x:0,y:0,z:40},{x:0,y:0,z:95}],lines:[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7],[8,9],[9,10],[10,11],[11,8],[12,13],[14,15]]}};window.routeTo=function(t){window.playHardwareTone(440,.06),setTimeout(()=>window.playHardwareTone(880,.06),60),["addr-gateway","addr-identity","addr-directory","addr-uplink"].forEach(s=>{const o=document.getElementById(s);o&&o.classList.add("hidden");const l=document.getElementById(`btn-${s}`);l&&(l.classList.remove("border-emerald-500","bg-emerald-950/30","text-[#00ff66]"),l.classList.add("border-emerald-950","text-emerald-600"))});const a=document.getElementById(t);a&&a.classList.remove("hidden");const n=document.getElementById(`btn-${t}`);n&&(n.classList.add("border-emerald-500","bg-emerald-950/30","text-[#00ff66]"),n.classList.remove("border-emerald-950","text-emerald-600")),t==="addr-gateway"&&setTimeout(N,50)};window.toggleLanguage=function(){z(),b=b==="en"?"fa":"en";const t=document.documentElement,e=document.getElementById("langToggle"),a=document.getElementById("start-title"),n=document.getElementById("start-target"),s=document.getElementById("start-load");b==="fa"?(t.setAttribute("dir","rtl"),t.setAttribute("lang","fa"),e&&(e.innerText="[ JUMPER: FA ]"),a&&(a.innerText="واحد مدیریت پروتکل‌های سخت‌افزاری میکرومد // آماده به کار"),n&&(n.innerText="معماری مدارهای چاپی: سبک مینیمال و فرکانس بالا"),s&&(s.innerText="درحال آماده‌سازی سیستم و بوردها...")):(t.setAttribute("dir","ltr"),t.setAttribute("lang","en"),e&&(e.innerText="[ JUMPER: EN ]"),a&&(a.innerText="MICROMED MASTER CONTROL PROTOCOLS // READY"),n&&(n.innerText="TARGET ARCHITECTURE: ULTRA-GLOW MINIMAL DESIGNATORS"),s&&(s.innerText="BOOTSTRAPPING MAINBOARD REGISTERS [99%]")),window.playHardwareTone(880,.08),setTimeout(()=>window.playHardwareTone(1100,.1),100),K(),D();const o=document.getElementById("teamReadout");o&&(o.innerHTML=`
      <span class="text-emerald-700 block text-[9px] font-bold">U1_CELL_READOUT</span>
      <p class="text-emerald-100/60 mt-1">${w[b]["team-readout-placeholder"]}</p>
    `),Y()};function K(){document.querySelectorAll("[data-key]").forEach(e=>{const a=e.getAttribute("data-key");a&&w[b][a]&&(e.innerHTML=w[b][a])})}function z(){g||(g=new(window.AudioContext||window.webkitAudioContext))}window.toggleMainboardAudio=function(){z(),A=!A;const t=document.getElementById("synthToggle");t&&(A?(t.innerText="[🔈 AUDIO_MUTED]",t.className="text-[#00ff66] hover:text-white transition-colors uppercase font-bold text-[9px] flex items-center gap-1 border border-emerald-950/60 bg-emerald-950/20 px-2 py-0.5"):(t.innerText="[🔊 AUDIO_LIVE]",t.className="text-white hover:text-white transition-colors uppercase font-bold text-[9px] flex items-center gap-1 border border-[#00ff66]/60 bg-[#00ff66]/10 px-2 py-0.5 glow-border",window.playHardwareTone(659.25,.08),setTimeout(()=>window.playHardwareTone(987.77,.12),80)))};window.playHardwareTone=function(t,e){if(!A&&(z(),!!g))try{const a=g.createOscillator(),n=g.createGain();a.type="sine",a.frequency.setValueAtTime(t,g.currentTime),n.gain.setValueAtTime(.04,g.currentTime),n.gain.exponentialRampToValueAtTime(1e-5,g.currentTime+e),a.connect(n),n.connect(g.destination),a.start(),a.stop(g.currentTime+e)}catch(a){console.log("Synthesizer error ignored for stability: ",a)}};function D(){const t=document.getElementById("datasheetContent"),e=document.getElementById("datasheetDesignator");t&&(t.innerHTML=X[b][P]||""),e&&(e.innerText=`DATASHEET // ${P}`)}window.selectProduct=function(t){window.playHardwareTone(659.25,.05),P=t,["MM-TC-01","MM-MC-04","MM-ISO-02"].forEach(n=>{const s=document.getElementById(`btn-prod-${n}`);if(s){s.classList.remove("border-emerald-500","bg-emerald-950/20","text-[#00ff66]"),s.classList.add("border-emerald-950","text-emerald-600");const o=s.querySelector("span:last-child");o&&(o.innerText=w[b]["dir-status-locked"],o.className="text-[9px] text-gray-500")}});const a=document.getElementById(`btn-prod-${t}`);if(a){a.classList.add("border-emerald-500","bg-emerald-950/20","text-[#00ff66]"),a.classList.remove("border-emerald-950","text-emerald-600");const n=a.querySelector("span:last-child");n&&(n.innerText=w[b]["dir-status-active"],n.className="text-[9px] text-[#00ff66] font-bold")}D()};window.selectTeamNode=function(t){window.playHardwareTone(523.25,.06),setTimeout(()=>window.playHardwareTone(659.25,.06),60);const e=`team-${t}-title`,a=`team-${t}-desc`,n=document.getElementById("teamReadout");n&&(n.innerHTML=`
      <span class="text-[#00ff66] block text-[9px] font-bold font-silkscreen">${w[b][e]}</span>
      <p class="text-emerald-100/80 mt-1 leading-relaxed">${w[b][a]}</p>
    `)};window.handleContractSubmission=function(t){t.preventDefault(),window.playHardwareTone(587.33,.1),setTimeout(()=>window.playHardwareTone(880,.18),120);const e=document.getElementById("formSuccessMessage");e&&e.classList.remove("hidden")};window.dismissFormNotification=function(){window.playHardwareTone(440,.06);const t=document.getElementById("formSuccessMessage");t&&t.classList.add("hidden");const e=document.getElementById("pcbContractForm");e&&e.reset()};const f=document.getElementById("pcbBackgroundCanvas"),i=f?f.getContext("2d"):null;let S=[];function Y(){if(!f)return;S=[];const t=f.width,e=f.height,a=document.documentElement.getAttribute("dir")==="rtl",n=l=>a?t-l:l;function s(l,c,m,p,u){for(let x=0;x<m;x++){const h=[];let E=l+x*p,v=c;h.push({x:n(E),y:v});for(const L of u){let O=L.angle;a&&(O=(180-O+360)%360);const _=O*Math.PI/180;E+=L.length*Math.cos(_),v+=L.length*Math.sin(_),h.push({x:n(E),y:v})}S.push({points:h,color:"#00ff66",width:1.5,pulseProgress:Math.random()})}}s(t*.18,0,6,14,[{angle:90,length:e*.12},{angle:135,length:60},{angle:90,length:e*.14}]),s(t*.05,e*.35,8,10,[{angle:0,length:t*.12},{angle:45,length:80},{angle:0,length:t*.1}]),s(t*.85,0,4,16,[{angle:90,length:e*.1},{angle:225,length:70},{angle:180,length:t*.08}]),s(t*.65,e*.2,7,12,[{angle:180,length:t*.1},{angle:135,length:90},{angle:180,length:t*.08}]),s(t*.48,e,4,20,[{angle:270,length:e*.16},{angle:315,length:110},{angle:270,length:e*.1}]),s(t*.12,e,5,12,[{angle:270,length:e*.14},{angle:225,length:80},{angle:270,length:e*.12}]),s(t*.78,e,9,8,[{angle:270,length:e*.18},{angle:225,length:90},{angle:270,length:e*.08}]),[{x:t*.08,y:e*.15,d:[{angle:45,length:50},{angle:0,length:70}]},{x:t*.9,y:e*.5,d:[{angle:135,length:60},{angle:180,length:80}]},{x:t*.28,y:e*.82,d:[{angle:315,length:70},{angle:0,length:60}]},{x:t*.72,y:e*.32,d:[{angle:135,length:50},{angle:180,length:50}]},{x:t*.15,y:e*.65,d:[{angle:45,length:80},{angle:90,length:40}]}].forEach(l=>{const c=[];let m=l.x,p=l.y;c.push({x:n(m),y:p});for(const u of l.d){let x=u.angle;a&&(x=(180-x+360)%360);const h=x*Math.PI/180;m+=u.length*Math.cos(h),p+=u.length*Math.sin(h),c.push({x:n(m),y:p})}S.push({points:c,color:"#00ff66",width:1.6,pulseProgress:Math.random()})})}function F(){f&&(f.width=window.innerWidth,f.height=window.innerHeight,Y())}function G(){if(!f||!i)return;i.clearRect(0,0,f.width,f.height),i.strokeStyle="rgba(0, 255, 102, 0.02)",i.lineWidth=.5;const t=40;for(let e=0;e<f.width;e+=t)i.beginPath(),i.moveTo(e,0),i.lineTo(e,f.height),i.stroke();for(let e=0;e<f.height;e+=t)i.beginPath(),i.moveTo(0,e),i.lineTo(f.width,e),i.stroke();S.forEach(e=>{if(e.points.length===0)return;i.beginPath(),i.moveTo(e.points[0].x,e.points[0].y);for(let p=1;p<e.points.length;p++)i.lineTo(e.points[p].x,e.points[p].y);i.strokeStyle="rgba(0, 255, 102, 0.08)",i.lineWidth=5,i.stroke(),i.strokeStyle="rgba(0, 255, 102, 0.35)",i.lineWidth=e.width,i.stroke();const a=e.points[e.points.length-1];i.beginPath(),i.arc(a.x,a.y,4.5,0,Math.PI*2),i.fillStyle="#0a0c0d",i.strokeStyle="#00ff66",i.lineWidth=1.5,i.fill(),i.stroke(),e.pulseProgress+=.003,e.pulseProgress>=1&&(e.pulseProgress=0);const n=e.points.length-1,s=1/n,o=Math.min(Math.floor(e.pulseProgress/s),n-1),l=e.pulseProgress%s/s,c=e.points[o],m=e.points[o+1];if(c&&m){const p=c.x+(m.x-c.x)*l,u=c.y+(m.y-c.y)*l;i.beginPath(),i.arc(p,u,2.5,0,Math.PI*2),i.fillStyle="#00ff66",i.shadowColor="#00ff66",i.shadowBlur=8,i.fill(),i.shadowBlur=0}}),requestAnimationFrame(G)}const r=document.getElementById("hologramViewer3D"),d=r?r.getContext("2d"):null;r&&(r.addEventListener("mousedown",t=>{T=!0,R=!1,M=t.clientX,I=t.clientY}),window.addEventListener("mouseup",()=>{T=!1}),r.addEventListener("mousemove",t=>{if(!T)return;const e=t.clientX-M,a=t.clientY-I;C+=e*.01,y+=a*.01,M=t.clientX,I=t.clientY,y=Math.max(-Math.PI/2+.1,Math.min(Math.PI/2-.1,y));const n=document.getElementById("holoYaw"),s=document.getElementById("holoPitch");n&&(n.innerText=C.toFixed(2)),s&&(s.innerText=y.toFixed(2))}),r.addEventListener("touchstart",t=>{t.touches.length!==0&&(T=!0,R=!1,M=t.touches[0].clientX,I=t.touches[0].clientY)}),r.addEventListener("touchend",()=>{T=!1}),r.addEventListener("touchmove",t=>{if(!T||t.touches.length===0)return;const e=t.touches[0],a=e.clientX-M,n=e.clientY-I;C+=a*.015,y+=n*.015,M=e.clientX,I=e.clientY,y=Math.max(-Math.PI/2+.1,Math.min(Math.PI/2-.1,y))}));window.toggleHoloOrbit=function(){R=!R;const t=document.getElementById("holoOrbitBtn");t&&(t.innerText=R?"AUTO_ROT: ON":"AUTO_ROT: OFF"),window.playHardwareTone(659.25,.05)};window.selectHoloModel=function(t){window.playHardwareTone(784,.06),U=t,["blue-pill","esp32","triac","transistor","diode"].forEach(s=>{const o=document.getElementById(`btn-holo-${s}`);o&&(o.className="py-1.5 px-2 text-[9px] font-mono border border-emerald-900 text-emerald-600 hover:border-cyan-500 hover:text-cyan-400")});const a=document.getElementById(`btn-holo-${t}`);a&&(a.className="py-1.5 px-2 text-[9px] font-mono border border-cyan-500 bg-cyan-950/20 text-[#00f3ff] font-bold");const n=document.getElementById("holoModelName");n&&(n.innerText=`MM-${t.toUpperCase()}`)};function N(){r&&r.parentElement&&(r.width=r.parentElement.clientWidth,r.height=r.parentElement.clientHeight||240)}function k(t,e,a,n,s){const o=Math.cos(C),l=Math.sin(C),c=t*o-a*l,m=t*l+a*o,p=Math.cos(y),u=Math.sin(y),x=e*p-m*u,h=e*u+m*p,E=320,v=E/(E+h);return{x:n/2+c*v*H,y:s/2+x*v*H,scale:v}}function V(){if(!r||!d)return;d.clearRect(0,0,r.width,r.height);const t=r.width,e=r.height;R&&(C+=.008);const a=$[U];if(a){d.strokeStyle="rgba(0, 243, 255, 0.02)",d.lineWidth=1;for(let n=50;n<=200;n+=50)d.beginPath(),d.arc(t/2,e/2+20,n,0,Math.PI*2),d.stroke();d.strokeStyle="#00f3ff",d.lineWidth=1.4,a.lines.forEach(n=>{const s=a.vertices[n[0]],o=a.vertices[n[1]];if(s&&o){const l=k(s.x,s.y,s.z,t,e),c=k(o.x,o.y,o.z,t,e);d.beginPath(),d.moveTo(l.x,l.y),d.lineTo(c.x,c.y),d.strokeStyle=`rgba(0, 243, 255, ${Math.min(1,.2+l.scale*.7)})`,d.stroke()}}),a.vertices.forEach(n=>{const s=k(n.x,n.y,n.z,t,e);d.fillStyle="#00ff66",d.beginPath(),d.arc(s.x,s.y,3*s.scale,0,Math.PI*2),d.fill()})}requestAnimationFrame(V)}window.addEventListener("resize",()=>{F(),N()});const B=["> Mapping spatial substrate trace configurations... SUCCESS","> Aligning multi-layer copper impedance vectors... MATCHED [50 OHM]","> Booting bare-metal real-time scheduler registers... ACTIVE","> Loading medical device safety protocols (IEC 60601-1)... LOADED","> Calibrating cold-junction temperature sensors... READY","> Linking custom FOC motor velocity engines... BOUNDED","> Launching 3D Hologram projection gateway..."];function J(){const t=document.getElementById("startupLog"),e=document.getElementById("startupScreen");if(!t||!e)return;const a=t,n=e;let s=0;function o(){if(s<B.length){const l=document.createElement("div");l.innerText=B[s],a.appendChild(l),a.scrollTop=a.scrollHeight,s++,setTimeout(o,200+Math.random()*200)}else setTimeout(()=>{n.style.transition="opacity 0.5s ease-out",n.style.opacity="0",setTimeout(()=>{n.classList.add("hidden")},500)},400)}setTimeout(o,400)}document.addEventListener("DOMContentLoaded",()=>{F(),N(),V(),D(),J(),G();const t=document.getElementById("firmwareFreq");t&&setInterval(()=>{const e=(16+Math.random()*.005).toFixed(4);t.innerText=`${e} MHz`},1200)});
