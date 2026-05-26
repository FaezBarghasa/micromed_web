// ==================== STATE MANAGEMENT ====================
let soundEngineCtx = null;
let isMuted = true;
let activeHoloKey = 'blue-pill';
let isHoloOrbiting = true;
let hYaw = 0.4;
let hPitch = -0.3;
let scaleFactor = 1.0;
let isDragging = false;
let previousMouseX = 0;
let previousMouseY = 0;
let entryCounter = 0;

// ==================== TRANSLATED SCHEMATICS / BLUEPRINTS ====================
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

const holoModels = {
    "blue-pill": {
        // Symmetrical STM32 Blue pill dev-board
        vertices: [
            // Main Board boundaries
            {x: -50, y: -3, z: -100}, {x: 50, y: -3, z: -100}, {x: 50, y: -3, z: 100}, {x: -50, y: -3, z: 100},
            // Microcontroller Chip package
            {x: -20, y: -8, z: -20}, {x: 20, y: -8, z: -20}, {x: 20, y: -8, z: 20}, {x: -20, y: -8, z: 20},
            // Micro USB module
            {x: -15, y: -10, z: -105}, {x: 15, y: -10, z: -105}, {x: 15, y: -3, z: -95}, {x: -15, y: -3, z: -95},
            // SMT Oscillator Crystal
            {x: -8, y: -6, z: 50}, {x: 8, y: -6, z: 50}, {x: 8, y: -3, z: 70}, {x: -8, y: -3, z: 70}
        ],
        lines: [
            [0, 1], [1, 2], [2, 3], [3, 0], // Board edge
            [4, 5], [5, 6], [6, 7], [7, 4], // Main MCU Package
            [8, 9], [9, 10], [10, 11], [11, 8], // USB metal
            [12, 13], [13, 14], [14, 15], [15, 12] // Oscillator crystal
        ]
    },
    "esp32": {
        // SMT ESP32 Board
        vertices: [
            // Board edge
            {x: -60, y: -3, z: -90}, {x: 60, y: -3, z: -90}, {x: 60, y: -3, z: 90}, {x: -60, y: -3, z: 90},
            // ESP32 WROOM metal shield module
            {x: -25, y: -8, z: -40}, {x: 25, y: -8, z: -40}, {x: 25, y: -8, z: 30}, {x: -25, y: -8, z: 30},
            // USB-C Shield Interface on margin
            {x: -18, y: -8, z: -95}, {x: 18, y: -8, z: -95}, {x: 18, y: -3, z: -85}, {x: -18, y: -3, z: -85},
            // SMT boot buttons
            {x: -45, y: -6, z: -75}, {x: -35, y: -6, z: -75}, {x: -35, y: -3, z: -65}, {x: -45, y: -3, z: -65}
        ],
        lines: [
            [0, 1], [1, 2], [2, 3], [3, 0],
            [4, 5], [5, 6], [6, 7], [7, 4],
            [8, 9], [9, 10], [10, 11], [11, 8],
            [12, 13], [13, 14], [14, 15], [15, 12]
        ]
    },
    "triac": {
        // BT136 TRIAC (TO-220 Package)
        vertices: [
            // Main Plastic Molded housing body
            {x: -30, y: -45, z: -10}, {x: 30, y: -45, z: -10}, {x: 30, y: 15, z: -10}, {x: -30, y: 15, z: -10}, // front
            {x: -30, y: -45, z: -25}, {x: 30, y: -45, z: -25}, {x: 30, y: 15, z: -25}, {x: -30, y: 15, z: -25}, // back
            // Metal heatsink tab extending upwards
            {x: -28, y: -45, z: -26}, {x: 28, y: -45, z: -26}, {x: 28, y: -75, z: -26}, {x: -28, y: -75, z: -26},
            // Three detailed output parallel leads (pins) fanning downwards
            {x: -20, y: 15, z: -17}, {x: -20, y: 75, z: -17}, // Pin 1
            {x: 0, y: 15, z: -17}, {x: 0, y: 75, z: -17},     // Pin 2
            {x: 20, y: 15, z: -17}, {x: 20, y: 75, z: -17}    // Pin 3
        ],
        lines: [
            [0, 1], [1, 2], [2, 3], [3, 0], // front box
            [4, 5], [5, 6], [6, 7], [7, 4], // back box
            [0, 4], [1, 5], [2, 6], [3, 7], // box connections
            [8, 9], [9, 10], [10, 11], [11, 8], // tab frame
            [12, 13], [14, 15], [16, 17] // pins
        ]
    },
    "transistor": {
        // TO-92 Transistor Package
        vertices: [
            // Front flat face
            {x: -20, y: -30, z: -10}, {x: 20, y: -30, z: -10}, {x: 20, y: 20, z: -10}, {x: -20, y: 20, z: -10},
            // Semicircular back face representation
            {x: -15, y: -30, z: -25}, {x: 15, y: -30, z: -25}, {x: 15, y: 20, z: -25}, {x: -15, y: 20, z: -25},
            // leads
            {x: -15, y: 20, z: -15}, {x: -15, y: 70, z: -15},
            {x: 0, y: 20, z: -15}, {x: 0, y: 70, z: -15},
            {x: 15, y: 20, z: -15}, {x: 15, y: 70, z: -15}
        ],
        lines: [
            [0, 1], [1, 2], [2, 3], [3, 0],
            [4, 5], [5, 6], [6, 7], [7, 4],
            [0, 4], [1, 5], [2, 6], [3, 7],
            [8, 9], [10, 11], [12, 13]
        ]
    },
    "diode": {
        // DO-41 Schottky Diode
        vertices: [
            // Symmetrical Cylindrical package body
            {x: -15, y: -15, z: -40}, {x: 15, y: -15, z: -40}, {x: 15, y: 15, z: -40}, {x: -15, y: 15, z: -40}, // base 1
            {x: -15, y: -15, z: 40}, {x: 15, y: -15, z: 40}, {x: 15, y: 15, z: 40}, {x: -15, y: 15, z: 40}, // base 2
            // Cathode band marking rings
            {x: -15, y: -15, z: -20}, {x: 15, y: -15, z: -20}, {x: 15, y: 15, z: -20}, {x: -15, y: 15, z: -20},
            // Axial pins fanning through endpoints
            {x: 0, y: 0, z: -40}, {x: 0, y: 0, z: -95},
            {x: 0, y: 0, z: 40}, {x: 0, y: 0, z: 95}
        ],
        lines: [
            [0, 1], [1, 2], [2, 3], [3, 0],
            [4, 5], [5, 6], [6, 7], [7, 4],
            [0, 4], [1, 5], [2, 6], [3, 7],
            [8, 9], [9, 10], [10, 11], [11, 8], // cathode band
            [12, 13], [14, 15]
        ]
    }
};

// ==================== DICTIONARIES & HELPER FUNCTIONS ====================
function initAudioEngine() {
    if (!soundEngineCtx) {
        soundEngineCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function toggleMainboardAudio() {
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

function playHardwareTone(freq, dur) {
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
        console.log("Audio exception skipped.");
    }
}

function updateDatasheet() {
    const container = document.getElementById('datasheetContent');
    const designator = document.getElementById('datasheetDesignator');

    if (container) {
        container.innerHTML = datasheetTemplates[currentLang][activeProductKey] || '';
    }
    if (designator) {
        designator.innerText = `DATASHEET // ${activeProductKey}`;
    }
}

function selectProduct(prodKey) {
    playHardwareTone(659.25, 0.05);
    activeProductKey = prodKey;

    const productsList = ['MM-TC-01', 'MM-MC-04', 'MM-ISO-02'];

    // Toggle datasheet selector buttons style
    productsList.forEach(key => {
        const btn = document.getElementById(`btn-prod-${key}`);
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

    const activeBtn = document.getElementById(`btn-prod-${prodKey}`);
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

// ==================== BACKGROUND PCB GENERATOR ====================
const pcbCanvas = document.getElementById('pcbBackgroundCanvas');
const pcbCtx = pcbCanvas.getContext('2d');

function compilePCBLayout() {
    pcbCanvas.width = window.innerWidth;
    pcbCanvas.height = window.innerHeight;
    drawStaticPCB();
}

function layoutPCBSubstrate() {
    compilePCBLayout();
}

function drawStaticPCB() {
    const w = pcbCanvas.width;
    const h = pcbCanvas.height;
    pcbCtx.clearRect(0, 0, w, h);

    // 1. Draw coordinate grid backing
    pcbCtx.strokeStyle = 'rgba(0, 255, 102, 0.015)';
    pcbCtx.lineWidth = 0.5;
    const gridSize = 40;
    for (let x = 0; x < w; x += gridSize) {
        pcbCtx.beginPath();
        pcbCtx.moveTo(x, 0);
        pcbCtx.lineTo(x, h);
        pcbCtx.stroke();
    }
    for (let y = 0; y < h; y += gridSize) {
        pcbCtx.beginPath();
        pcbCtx.moveTo(0, y);
        pcbCtx.lineTo(w, y);
        pcbCtx.stroke();
    }

    // Helper for routing thick busses
    const drawTraceArray = (startX, startY, count, spacing, segments) => {
        pcbCtx.lineWidth = 1;
        for (let i = 0; i < count; i++) {
            pcbCtx.strokeStyle = i % 2 === 0 ? 'rgba(0, 255, 102, 0.08)' : 'rgba(0, 243, 255, 0.05)';
            pcbCtx.beginPath();
            let curX = startX + i * spacing;
            let curY = startY;
            pcbCtx.moveTo(curX, curY);

            for (let seg of segments) {
                const rad = (seg.angle * Math.PI) / 180;
                curX += seg.length * Math.cos(rad);
                curY += seg.length * Math.sin(rad);
                pcbCtx.lineTo(curX, curY);
            }
            pcbCtx.stroke();

            // Endpoint Via solder pad
            pcbCtx.fillStyle = 'rgba(0, 255, 102, 0.2)';
            pcbCtx.beginPath();
            pcbCtx.arc(curX, curY, 3, 0, Math.PI * 2);
            pcbCtx.fill();
        }
    };

    // Draw extremely dense CAD trace modules in all corners + centers
    // Top Left Fanout
    drawTraceArray(100, 0, 10, 8, [
        {angle: 90, length: 120},
        {angle: 45, length: 100},
        {angle: 90, length: 200}
    ]);

    // Top Right Parallel Data Bus
    drawTraceArray(w - 300, 0, 12, 6, [
        {angle: 90, length: 150},
        {angle: 135, length: 120},
        {angle: 90, length: h * 0.3}
    ]);

    // Bottom Center Power Plane Trace Arrays
    drawTraceArray(w * 0.35, h, 14, 12, [
        {angle: 270, length: h * 0.2},
        {angle: 315, length: 140},
        {angle: 270, length: 100}
    ]);

    // Left Margin Diagnostic Tracks
    drawTraceArray(0, h * 0.3, 8, 10, [
        {angle: 0, length: 120},
        {angle: 45, length: 80},
        {angle: 0, length: 150}
    ]);

    // Right Margin High Frequency Loops
    drawTraceArray(w, h * 0.5, 9, 8, [
        {angle: 180, length: 150},
        {angle: 225, length: 100},
        {angle: 180, length: h * 0.2}
    ]);

    // Draw massive microchip physical silicon outline in background center
    pcbCtx.strokeStyle = 'rgba(0, 255, 102, 0.04)';
    pcbCtx.lineWidth = 2;
    const chipX = w / 2 - 250;
    const chipY = h / 2 - 250;
    pcbCtx.strokeRect(chipX, chipY, 500, 500);

    // Chip breakout pins radiating into board substrate
    pcbCtx.strokeStyle = 'rgba(0, 255, 102, 0.06)';
    pcbCtx.lineWidth = 0.5;
    for (let offset = 0; offset < 500; offset += 20) {
        // Top legs fanning
        pcbCtx.beginPath();
        pcbCtx.moveTo(chipX + offset, chipY);
        pcbCtx.lineTo(chipX + offset - 40, chipY - 40);
        pcbCtx.stroke();
        // Bottom legs fanning
        pcbCtx.beginPath();
        pcbCtx.moveTo(chipX + offset, chipY + 500);
        pcbCtx.lineTo(chipX + offset + 40, chipY + 540);
        pcbCtx.stroke();
        // Left legs fanning
        pcbCtx.beginPath();
        pcbCtx.moveTo(chipX, chipY + offset);
        pcbCtx.lineTo(chipX - 40, chipY + offset - 40);
        pcbCtx.stroke();
        // Right legs fanning
        pcbCtx.beginPath();
        pcbCtx.moveTo(chipX + 500, chipY + offset);
        pcbCtx.lineTo(chipX + 540, chipY + offset + 40);
        pcbCtx.stroke();
    }
}

// ==================== INTERACTIVE 3D HOLOGRAM EXPLORER PORTAL ====================
const holoCanvas = document.getElementById('hologramViewer3D');
const holoCtx = holoCanvas.getContext('2d');

holoCanvas.addEventListener('mousedown', (e) => {
    isDragging = true;
    isHoloOrbiting = false;
    previousMouseX = e.clientX;
    previousMouseY = e.clientY;
});

window.addEventListener('mouseup', () => {
    isDragging = false;
});

holoCanvas.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - previousMouseX;
    const deltaY = e.clientY - previousMouseY;
    hYaw += deltaX * 0.01;
    hPitch += deltaY * 0.01;
    previousMouseX = e.clientX;
    previousMouseY = e.clientY;

    // Constrain pitch to avoid flipping over axis boundaries
    hPitch = Math.max(-Math.PI / 2 + 0.1, Math.min(Math.PI / 2 - 0.1, hPitch));

    document.getElementById('holoYaw').innerText = hYaw.toFixed(2);
    document.getElementById('holoPitch').innerText = hPitch.toFixed(2);
});

// Touch support for dragging on mobile viewports
holoCanvas.addEventListener('touchstart', (e) => {
    if (e.touches.length === 0) return;
    isDragging = true;
    isHoloOrbiting = false;
    previousMouseX = e.touches[0].clientX;
    previousMouseY = e.touches[0].clientY;
});
holoCanvas.addEventListener('touchend', () => {
    isDragging = false;
});
holoCanvas.addEventListener('touchmove', (e) => {
    if (!isDragging || e.touches.length === 0) return;
    const t = e.touches[0];
    const deltaX = t.clientX - previousMouseX;
    const deltaY = t.clientY - previousMouseY;
    hYaw += deltaX * 0.015;
    hPitch += deltaY * 0.015;
    previousMouseX = t.clientX;
    previousMouseY = t.clientY;
    hPitch = Math.max(-Math.PI / 2 + 0.1, Math.min(Math.PI / 2 - 0.1, hPitch));
});

function toggleHoloOrbit() {
    isHoloOrbiting = !isHoloOrbiting;
    const btn = document.getElementById('holoOrbitBtn');
    btn.innerText = isHoloOrbiting ? 'AUTO_ROT: ON' : 'AUTO_ROT: OFF';
    playHardwareTone(659.25, 0.05);
}

function selectHoloModel(key) {
    playHardwareTone(784, 0.06);
    activeHoloKey = key;
    const btnMap = ['blue-pill', 'esp32', 'triac', 'transistor', 'diode'];
    btnMap.forEach(k => {
        const btn = document.getElementById(`btn-holo-${k}`);
        if (btn) {
            btn.className = "py-1.5 px-2 text-[9px] font-mono border border-emerald-900 text-emerald-600 hover:border-cyan-500 hover:text-cyan-400";
        }
    });
    const activeBtn = document.getElementById(`btn-holo-${key}`);
    if (activeBtn) {
        activeBtn.className = "py-1.5 px-2 text-[9px] font-mono border border-cyan-500 bg-cyan-950/20 text-[#00f3ff] font-bold";
    }
    document.getElementById('holoModelName').innerText = `MM-${key.toUpperCase()}`;
}

function resizeHologramCanvas() {
    holoCanvas.width = holoCanvas.parentElement.clientWidth;
    holoCanvas.height = holoCanvas.parentElement.clientHeight || 240;
}

function project3DHoloNode(x, y, z, w, h) {
    // 3D Matrix Rotations
    // 1. Yaw rotation around Y axis
    const cosY = Math.cos(hYaw);
    const sinY = Math.sin(hYaw);
    const x1 = x * cosY - z * sinY;
    const z1 = x * sinY + z * cosY;

    // 2. Pitch rotation around X axis
    const cosP = Math.cos(hPitch);
    const sinP = Math.sin(hPitch);
    const y2 = y * cosP - z1 * sinP;
    const z2 = y * sinP + z1 * cosP;

    // Perspective factor
    const dist = 320;
    const scale = dist / (dist + z2);

    return {
        x: (w / 2) + x1 * scale * scaleFactor,
        y: (h / 2) + y2 * scale * scaleFactor,
        scale: scale
    };
}

function renderHologramFrame() {
    holoCtx.clearRect(0, 0, holoCanvas.width, holoCanvas.height);
    const w = holoCanvas.width;
    const h = holoCanvas.height;

    if (isHoloOrbiting) {
        hYaw += 0.008; // Ambient rotation on idle state
    }

    const activeModel = holoModels[activeHoloKey];
    if (activeModel) {
        // Render volumetric background depth grid circles inside viewport
        holoCtx.strokeStyle = 'rgba(0, 243, 255, 0.02)';
        holoCtx.lineWidth = 1;
        for (let r = 50; r <= 200; r += 50) {
            holoCtx.beginPath();
            holoCtx.arc(w / 2, h / 2 + 20, r, 0, Math.PI * 2);
            holoCtx.stroke();
        }

        // Draw wireframe vector connections in 3D
        holoCtx.strokeStyle = '#00f3ff';
        holoCtx.lineWidth = 1.4;
        holoCtx.shadowColor = '#00f3ff';

        activeModel.lines.forEach(pair => {
            const v1 = activeModel.vertices[pair[0]];
            const v2 = activeModel.vertices[pair[1]];

            if (v1 && v2) {
                const p1 = project3DHoloNode(v1.x, v1.y, v1.z, w, h);
                const p2 = project3DHoloNode(v2.x, v2.y, v2.z, w, h);

                holoCtx.beginPath();
                holoCtx.moveTo(p1.x, p1.y);
                holoCtx.lineTo(p2.x, p2.y);

                // Set volumetric trace gradient opacity by projected depth scale
                holoCtx.strokeStyle = `rgba(0, 243, 255, ${Math.min(1.0, 0.2 + p1.scale * 0.7)})`;
                holoCtx.stroke();
            }
        });

        // Highlight intersections / mounting pins (Vias)
        activeModel.vertices.forEach(v => {
            const p = project3DHoloNode(v.x, v.y, v.z, w, h);
            holoCtx.fillStyle = '#00ff66';
            holoCtx.beginPath();
            holoCtx.arc(p.x, p.y, 3 * p.scale, 0, Math.PI * 2);
            holoCtx.fill();
        });
    }

    requestAnimationFrame(renderHologramFrame);
}

// ==================== APP LIFECYCLE LISTENERS ====================
window.addEventListener('resize', () => {
    layoutPCBSubstrate();
    resizeHologramCanvas();
});

// Initialize HUD bindings & Run Hologram and Background loops
layoutPCBSubstrate();
resizeHologramCanvas();
renderHologramFrame();
