import type { CurriculumWeek } from "./curriculum.types.js";

export const curriculumAr: Record<number, CurriculumWeek> = {
    1: {
      weekNumber: 1,
      title: "المعمارية وفهم الكود القائم",
      tagline: "افهم حدود النظام قبل أن تغيّر أي سطر كود",
      concept: "المعمارية والوحدات",
      guidingQuestion:
        "إزاي نقسّم تطبيق ضخم بحيث المطورين وأدوات الـ AI يقدروا يغيروا فيه بأمان؟",
      bigIdea:
        "قبل إجراء أي تعديل على نظام برمجي قائم، يجب على المهندسين ووكلاء الذكاء الاصطناعي فهم حدود ومسؤوليات كل طبقة. في هذا الأسبوع، نتتبع شريحة رأسية كاملة من واجهات React مروراً بنماذج النطاق ومتحكمات NestJS وصولاً إلى قاعدة البيانات، مع فرض حدود معمارية صارمة تمنع التداخل غير المنضبط.",
      outcomes: [
        "تتبع مسار إجراء مستخدم واحد من React عبر NestJS إلى PostgreSQL.",
        "شرح مسؤوليات المكون، والميزة (Feature)، والكيان (Entity)، والوحدة (Module)، والخدمة، والمستودع.",
        "تنفيذ تعديل مركّز دون تجاوز أو كسر الحدود المعمارية القائمة.",
        "فصل كود العرض والواجهة عن عقود النقل عبر الشبكة باستخدام نماذج نطاق محايدة.",
        "استخدام وكيل الذكاء الاصطناعي لاستكشاف الكود والتحقق من صحة فرضياته.",
        "تقديم مراجعة كود تقنية، دقيقة، ومحترمة لزملائك.",
      ],
      coreConcepts: [
        "فصل الاهتمامات (Separation of Concerns)",
        "الترابط العالي والاقتران المنخفض (High Cohesion & Low Coupling)",
        "حقن الاعتماديات (Dependency Injection)",
        "الواجهة العامة للوحدة مقابل الاستيرادات العميقة",
        "طبقة منع الفساد (Anti-Corruption Layer: Provider-neutral Entity vs Wire DTO)",
        "التنقل في المستودع ومراجعة الكود البرمجي",
      ],
      appliedThroughTheStack: [
        {
          layer: "React",
          details:
            "مجلدات الميزات (`src/features`)، نماذج الكيانات (`src/entities`)، شجرة المكونات كحد للوحدة، الخطافات (Hooks)، والتدفق أحادي الاتجاه للبيانات.",
        },
        {
          layer: "NestJS",
          details: "الوحدات (Modules)، المتحكمات (Controllers)، المزودات (Providers)، وحقن الاعتماديات.",
        },
        {
          layer: "GitHub",
          details: "فروع صغيرة، التزامات متسقة، طلبات سحب (PRs) مركزة، وأول مراجعة كود مهيكلة.",
        },
      ],
      assignment: {
        title: "تصنيفات المهام والحدود المعمارية",
        summary:
          "تتبع ميزة موجودة من البداية للنهاية، ثم أظهر تصنيفات المهام القائمة في الواجهة وواجهة برمجة التطبيقات (API) كشريحة رأسية تحترم حدود الواجهة الأمامية والخلفية وقاعدة البيانات. جدول التصنيفات وموديل Prisma موجودان بالفعل؛ هذا الأسبوع لا يتضمن أي تعديل في قاعدة البيانات.",
        detailsMd: `### المخرجات البرمجية (Deliverables)

#### مخرجات الواجهة الأمامية (Frontend Deliverables)
تنفيذ عرض تصنيفات المهام وفصل حدود الكيانات داخل \`elwarsha-web\`:
- **نموذج الكيان** (\`src/entities/assignment.ts\`): تعريف نماذج \`Assignment\` و \`Label\` محايدة للنطاق دون تكرار DTOs النقل.
- **شريحة التصنيف** (\`LabelChip.tsx\`): مكون شريحة منسق بتنسيقات الورشة داخل \`src/features/tasks\`.
- **منتقي التصنيفات** (\`LabelPicker.tsx\`): مكون فلترة تفاعلي متاح وسهل الوصول داخل \`src/features/tasks\`.
- **خطاف البيانات** (\`useTasks.ts\`): ربط المهام والتصنيفات عبر الخطاف. يُمنع استدعاء \`fetch\` المباشر من المكونات.
- **حماية حدود الكيانات**: المكونات لا تستورد \`@elwarsha/api-client\` مباشرة، بل تستهلك نماذج \`@entities\` والعميل من \`@core/api\`.

#### مخرجات الواجهة الخلفية (Backend Deliverables)
بناء وحدة التصنيفات في \`elwarsha-api\`:
- **المستودع** (\`labels.repository.ts\`): تغليف استعلامات Prisma على \`Label\` و \`AssignmentLabel\`.
- **الخدمة** (\`labels.service.ts\`): تصدير الواجهة العامة لعمليات التصنيفات.
- **المتحكم** (\`labels.controller.ts\`): إتاحة \`GET /api/v1/labels\` محمياً بواسطة \`AuthGuard\` وصلاحيات القراءة.
- **حقن الاعتماديات**: حقن \`LabelsService\` عبر حدود الوحدة داخل \`TasksService\` دون استيراد المستودع الداخلي.

---

### معيار التحقق والاختبار (Verification Bar)
1. **الواجهة الخلفية**: توسيع اختبار المهام e2e في \`test/app.e2e-spec.ts\` للتأكد من أن \`GET /api/v1/assignments\` ترجع المهام بتصنيفاتها، و \`GET /api/v1/labels\` ترجع التصنيفات المتاحة.
2. **الواجهة الأمامية**: توسيع \`src/features/tasks/TasksPage.test.tsx\` للتأكد من ظهور الشرائح وعمل الفلتر ووجود أسماء سهلة الوصول.
3. عدم إنشاء أطر أو أدوات اختبار جديدة.

### معيار إتاحة الاستخدام (Accessibility Bar)
كل عنصر تحكم تفاعلي يملك اسماً متاحاً لبرامج قراءة الشاشة (\`aria-label\` أو \`<label htmlFor="...">\`).

### معايير القبول (Acceptance Criteria)
- تضمين رسم توضيحي أو وصف مكتوب لمسار الطلب من React إلى NestJS إلى PostgreSQL.
- بقاء منطق الأعمال خارج مكونات React ومتحكمات NestJS.
- عدم استيراد مستودع داخلي لوحدة أخرى؛ العبور يتم حصراً عبر الخدمات المصدرة.
- عدم استيراد \`@elwarsha/api-client\` مباشرة في مكونات الميزات.
- خلو التعديل من أي تعديلات غير متعلقة بالمهمة.
- توضيح حدود الوحدات وطبقة الكيانات وملاحظات التحقق في الـ PR.

### النطاق الكامل (اختياري - يرفع التقييم)
- **فلترة المهام حسب التصنيف**: تنفيذ الفلترة النشطة داخل \`useTasks\` بحيث يؤدي اختيار تصنيف في \`LabelPicker\` إلى تحديث المهام المعروضة مع الحفاظ على حدود الوحدة نفسها.

### المسار المتقدم (اختياري)
- **فرض الحدود المعمارية برمجياً عبر ESLint** (١–٢ ساعة): إضافة قاعدة \`no-restricted-imports\` لمنع استيراد عميل API في الميزات، واختبار معماري يمنع استيراد مستودع التصنيفات مباشرة.
- **المعمارية السداسية وبدائل الاختبار في الذاكرة** (٣–٤ ساعات): بناء بدائل InMemory سريعة تسمح باجتياز الاختبارات وقاعدة البيانات متوقفة.
- **مزامنة الفلاتر مع معلمات الرابط URL SearchParams** (٢–٣ ساعات): حفظ حالة الفلتر في الرابط مع تحديث سجل المتصفح عبر \`replaceState\`.
- **فحص المعمارية عبر dependency-cruiser** (٣–٤ ساعات): إعداد فحص صارم للحدود وتوليد رسم بياني تفاعلي.`,
      },
      resources: {
        required: [
          {
            title: "التفكير بطريقة React (Thinking in React)",
            url: "https://react.dev/learn/thinking-in-react",
            layers: "Frontend",
            format: "Read",
            time: "٢٥ دقيقة",
            why: "بناء النموذج الذهني لهرمية المكونات وتدفق البيانات.",
          },
          {
            title: "وحدات NestJS (Modules)",
            url: "https://docs.nestjs.com/modules",
            layers: "Backend",
            format: "Read",
            time: "٢٠ دقيقة",
            why: "شرح حدود التطبيق المعتمدة في كافة أجزاء الواجهة الخلفية.",
          },
          {
            title: "دليل جوجل الهندسي لمراجعة الكود",
            url: "https://google.github.io/eng-practices/review/reviewer/",
            layers: "Concept, Delivery",
            format: "Read",
            time: "٢٠ دقيقة",
            why: "قراءة المقدمة وقسم 'ما الذي تبحث عنه'؛ معيار المراجعة والتقييم المعتمد للبرنامج.",
          },
          {
            title: "أفضل ممارسات البرمجة مع وكلاء الذكاء الاصطناعي (Cursor) (اختر واحداً)",
            url: "https://cursor.com/blog/agent-best-practices",
            layers: "AI",
            format: "Read",
            time: "٢٥ دقيقة",
            why: "تحديد نطاق العمل وتقديم السياق المناسب والتحقق من مخرجات الوكيل البرمجي.",
          },
          {
            title: "نظرة عامة على Claude Code (اختر واحداً)",
            url: "https://code.claude.com/docs/en/overview",
            layers: "AI",
            format: "Read",
            time: "٢٠ دقيقة",
            why: "التوجيه نفسه لوكيل الطرفية؛ اقرأ هذا أو دليل Cursor.",
          },
        ],
        assignment: [
          {
            title: "مزودات NestJS وحقن الاعتماديات",
            url: "https://docs.nestjs.com/providers",
            layers: "Backend",
            format: "Read",
            time: "٢٠ دقيقة",
            why: "تفاصيل حقن الاعتماديات أثناء بناء وحدة التصنيفات.",
          },
          {
            title: "تصميم طبقات البرمجيات: الكيانات (FSD Entities)",
            url: "https://feature-sliced.design/docs/reference/layers#entities",
            layers: "Frontend",
            format: "Read",
            time: "١٥ دقيقة",
            why: "سبب وجود نماذج النطاق في طبقة الكيانات بدلاً من استهلاك عميل API مباشرة.",
          },
          {
            title: "فهم واجهة المستخدم كشجرة مكونات",
            url: "https://react.dev/learn/understanding-your-ui-as-a-tree",
            layers: "Frontend",
            format: "Read",
            time: "١٥ دقيقة",
            why: "فهم شجرة الرندرة وعلاقات التبعية في React.",
          },
        ],
        alternative: [
          {
            title: "بناء منصة: NestJS من البداية للاحتراف",
            url: "https://www.youtube.com/watch?v=f0qzBkAQ3mk",
            layers: "Backend",
            format: "Watch",
            time: "٢٦ دقيقة",
            why: "فيديو بديل لقراءة توثيق وحدات NestJS من منشئ الإطار نفسه.",
          },
          {
            title: "بودكاست: تفكيك الكتل البرمجية الضخمة لوحدات",
            url: "https://podrocket.logrocket.com/modularizing-monolith-jimmy-bogard",
            layers: "Concept",
            format: "Listen",
            time: "٣٢ دقيقة",
            why: "تسجيل صوتي بديل لمحاضرة المعمارية مع توفر النص الكامل.",
          },
          {
            title: "محاضرة: Modularizing the Monolith — Jimmy Bogard",
            url: "https://www.youtube.com/watch?v=fc6_NtD9soI",
            layers: "Concept",
            format: "Watch",
            time: "٥٦ دقيقة",
            why: "إيجاد وفرض الحدود المعمارية داخل كود ضخم قائم.",
          },
        ],
      },
      reflectionQuestion: "إيه أكتر حد معماري ممكن تكسره بسهولة، وليه؟",
      prerequisites: ["Node 22", "Corepack/Yarn", "Docker Compose Postgres"],
    },
    2: {
      weekNumber: 2,
      title: "ربط الواجهة الأمامية بالخلفية (عقود HTTP و API)",
      tagline: "اتفق على العقد قبل كتابة الكود",
      concept: "عقود HTTP و API",
      guidingQuestion: "إزاي الواجهة الأمامية والخلفية بيتواصلوا مع بعض من غير ما الدنيا تبوظ؟",
      bigIdea:
        "في الأسبوع الأول، تعلمنا كيف ننظم الكود في وحدات مستقلة ونظيفة. هذا الأسبوع، نربط بين عالمين منفصلين تماماً:\n\n1. **الواجهة الأمامية (React):** الاستمارة المرئية التي تعمل داخل متصفح المستخدم.\n2. **الواجهة الخلفية (NestJS):** الخادم الذي يعمل على جهاز الكمبيوتر ويستقبل البيانات ويفحصها ويحفظها.\n\nولأن هذين الجزأين يعملان في مكانين مختلفين، يجب أن يتفقا على **عقد صارم (Contract)**:\n\n- ما هي البيانات التي ترسلها الواجهة الأمامية؟\n- ما هي الفحوصات والتحققات التي يجب أن تجريها الواجهة الخلفية؟\n- كيف يرد الخادم بدقة إذا ارتكب المستخدم خطأ (مثل كتابة بريد إلكتروني غير صالح)؟",
      outcomes: [
        "فهم آليات HTTP: كيف يرسل المتصفح البيانات (`POST`) وكيف يجيب الخادم برموز الحالة (`201 Created`، `422 Validation Error`، `409 Already Exists`).",
        "التحقق من المدخلات: فحص مدخلات المستخدم على الخادم لمنع وصول بيانات خاطئة أو خبيثة إلى قاعدة البيانات.",
        "أخطاء مهيكلة وودودة: إرسال استجابات JSON واضحة تُحدد للحقل الخاطئ سبب المشكلة بدقة.",
        "حالات تجربة المستخدم في النماذج: تعطيل الأزرار أثناء الإرسال، إظهار نصوص الخطأ أسفل الحقول المعنية، وعرض إيصال النجاح.",
        "إتاحة الاستخدام (A11y): ربط التسميات التوضيحية `<label>` بحقول الإدخال `<input>` لتمكين مستخدمي قارئات الشاشة.",
      ],
      coreConcepts: [
        "دورة الطلب والاستجابة ودلالات طرق HTTP (POST مقابل GET)",
        "رموز حالة HTTP (201 Created, 422 Unprocessable Entity, 409 Conflict)",
        "التحقق من البيانات في الخادم عبر class-validator و ValidationPipe",
        "الأخطاء المهيكلة وفق معيار RFC 7807 وقائمة invalidParams",
        "حالات استمارات React وإدارتها دون قيود (React Hook Form)",
        "إتاحة الاستمارات وإشعار قارئات الشاشة (aria-invalid و aria-describedby)",
      ],
      appliedThroughTheStack: [
        {
          layer: "React",
          details:
            "استمارات سهلة الوصول (<fieldset>، <legend>، <label>)، ربط React Hook Form، ربط أخطاء الحقول، حالات الإرسال، وبطاقات إيصال النجاح.",
        },
        {
          layer: "NestJS",
          details:
            "مخططات DTO مع مزخرفات class-validator، تحويل استثناءات ValidationPipe، معالجة ConflictException (409)، ونقاط تحكم نظيفة.",
        },
        {
          layer: "HTTP/REST",
          details: "تفاصيل المشاكل المهيكلة وفق RFC 7807، إيصالات 201 Created، أخطاء التحقق 422، وكشف التكرار 409.",
        },
      ],
      assignment: {
        title: "استمارة التقديم — الدفعة الثانية",
        summary:
          "ابنِ استمارة التقديم الرسمية لـ ElWarsha Cohort 2! عندما يملأ المتقدم الاستمارة على الموقع، ترسل واجهة React ١٤ حقلاً إلى واجهة NestJS الخلفية، التي تتحقق من صحتها وترد بإيصال القبول أو الأخطاء المهيكلة.",
        detailsMd: `> **ملاحظة حول الكود الابتدائي:** تم إعداد التوجيه (\`/:locale/apply\`) وزر التقديم في الترويسة وقشرة الصفحة وعميل API (\`api.applyCohort\`) مسبقاً في المستودع. مهمتك تركز على:
> 1. بناء مكون **\`CohortApplicationForm\`** بعناصر التحكم الكاملة وملاحظات التحقق وتنسيقات الورشة.
> 2. بناء **عقد التحقق والمتحكم في NestJS** مع استجابات الأخطاء المهيكلة وكشف التكرار.

### ١. حقول الاستمارة (العقد)

تجمع الاستمارة ١٤ حقلاً موزعة على ٤ أقسام:

#### القسم الأول: البيانات الشخصية والتواصل (Personal & Contact Information)
| الحقل | التسمية بالعربية | التسمية بالإنجليزية | النوع | القواعد |
| :--- | :--- | :--- | :--- | :--- |
| \`fullName\` | الاسم بالكامل | Full Name | Text | مطلوب، ٣ أحرف على الأقل |
| \`email\` | البريد الإلكتروني | Email Address | Email | مطلوب، بريد صالح (مثال: \`user@example.com\`) |
| \`whatsappNumber\` | رقم واتساب | WhatsApp Number | Tel | مطلوب، ١٠ إلى ١٥ رقماً (يدعم \`+\` مثل \`+201012345678\` أو \`01012345678\`) |
| \`githubHandle\` | اسم الحساب على GitHub | GitHub Handle | Text | مطلوب، اسم المستخدم فقط (أحرف وأرقام وشرطات دون رابط أو \`@\`) |
| \`discordHandle\` | اسم الحساب على Discord | Discord Handle | Text | مطلوب، اسم المستخدم فقط |

#### القسم الثاني: الخلفية التقنية والتعليمية (Technical Background)
| الحقل | التسمية بالعربية | التسمية بالإنجليزية | النوع | القواعد |
| :--- | :--- | :--- | :--- | :--- |
| \`currentStatus\` | وضعك الحالي | Current Status | Dropdown | اختر واحداً: طالب، خريج، يعمل في التقنية، تغيير مسار، أخرى |
| \`collegeMajor\` | الكلية والتخصص | College & Major | Text | مطلوب (مثل: حاسبات ومعلومات) |
| \`programmingExperience\` | من إمتى وانت بتتعلم برمجة؟ | Programming Experience | Text | مطلوب (مثل: سنة، ٦ شهور) |
| \`technologies\` | اللغات والتقنيات اللي اشتغلت بيها فعليًا | Technologies Used | Textarea | مطلوب، تقنيات كتبت بها كوداً حقيقياً |
| \`gitExperience\` | استخدمت Git قبل كده؟ | Git Experience | Dropdown | اختر واحداً: لم أستخدمه، الأساسيات، متمكن |

#### القسم الثالث: مهمة الصفحة الشخصية (Personal Page Task)
| الحقل | التسمية بالعربية | التسمية بالإنجليزية | النوع | القواعد |
| :--- | :--- | :--- | :--- | :--- |
| \`personalPageUrl\` | رابط الصفحة الشخصية المنشورة | Published Personal Page Link | URL | مطلوب، يبدأ بـ \`http://\` أو \`https://\` |
| \`githubRepoUrl\` | لينك الريبو على GitHub | GitHub Repository Link | URL | مطلوب، رابط مستودع على GitHub (مثل \`https://github.com/u/r\`) |
| \`aiUsage\` | استخدمت أدوات الذكاء الاصطناعي في عمل الصفحة؟ | AI Usage | Textarea | مطلوب، وضح بصدق كيف استخدمت الأدوات (أو إن لم تستخدمها) |

#### القسم الرابع: الدافع والالتزام (Motivation)
| الحقل | التسمية بالعربية | التسمية بالإنجليزية | النوع | القواعد |
| :--- | :--- | :--- | :--- | :--- |
| \`motivation\` | ليه عايز تدخل البرنامج ده تحديدًا؟ | Motivation | Textarea | مطلوب، ٥٠ حرفاً على الأقل (مع عداد حي لأفضل تجربة مستخدم) |

---

### ٢. استجابات الخادم (How the Backend Responds)
النقطة النهائية: \`POST /api/v1/cohorts/cohort-2/applications\`

#### ١. نجاح التقديم (\`201 Created\`):
\`\`\`json
{
  "id": "app_123456",
  "cohortSlug": "cohort-2",
  "email": "student@example.com",
  "status": "received",
  "createdAt": "2026-10-10T12:00:00.000Z"
}
\`\`\`

#### ٢. أخطاء التحقق من الحقول (\`422 Unprocessable Entity\`):
يرسل الخادم استجابة JSON واضحة تسرد كل حقل غير صالح:
\`\`\`json
{
  "type": "https://elwarsha.dev/errors/validation-failed",
  "title": "Validation Failed",
  "status": 422,
  "detail": "Some fields have invalid values",
  "instance": "/api/v1/cohorts/cohort-2/applications",
  "invalidParams": [
    { "name": "email", "reason": "Must be a valid email address" },
    { "name": "motivation", "reason": "Must be at least 50 characters" }
  ]
}
\`\`\`

#### ٣. طلب مكرر بالبريد أو حساب GitHub (\`409 Conflict\`):
\`\`\`json
{
  "type": "https://elwarsha.dev/errors/duplicate-application",
  "title": "Application Already Submitted",
  "status": 409,
  "detail": "An application with this email or GitHub handle already exists for Cohort 2",
  "instance": "/api/v1/cohorts/cohort-2/applications"
}
\`\`\`

---

### المخرجات البرمجية (Deliverables)

#### مخرجات الواجهة الخلفية (\`elwarsha-api\`)
1. **الـ DTO** (\`src/modules/applications/dto/apply-cohort.dto.ts\`): التحقق من صحة الحقول الـ ١٤ باستخدام مزخرفات \`class-validator\` وفق قواعد العقد.
2. **الخدمة** (\`src/modules/applications/applications.service.ts\`): تخزين الطلبات في الذاكرة ورمي \`ConflictException\` (409) عند تكرار البريد أو الحساب للدفعة.
3. **المتحكم** (\`src/modules/applications/applications.controller.ts\`): معالجة \`POST /api/v1/cohorts/:slug/applications\` واستدعاء الخدمة وإرجاع \`201 Created\` مع الإيصال.
4. **أنبوب ومصفي الاستثناءات** (\`src/common/\`): صياغة أخطاء التحقق إلى 422 مع \`invalidParams\` (\`[{ name, reason }]\`)، والتكرار إلى 409.
5. **تحديث وثيقة OpenAPI**: تشغيل \`yarn openapi:export\` لتحديث ملف \`openapi.json\`.

#### مخرجات الواجهة الأمامية (\`elwarsha-web\`)
1. **المكون** (\`src/features/apply/CohortApplicationForm.tsx\` و \`.module.css\`): استمارة ميسرة مقسمة إلى ٤ أقسام \`<fieldset>\` للحقول الـ ١٤ بتنسيقات الورشة.
2. **حالات تجربة المستخدم**: التعامل مع الخمول، حالة الإرسال (تعطيل الزر)، أخطاء الحقول، تنبيه التعارض 409، وبطاقة إيصال القبول 201.
3. **التكامل مع العميل** (\`@core/api\`): إرسال البيانات عبر استدعاء \`api.applyCohort(cohortSlug, formData)\`.
4. **توزيع الأخطاء**: وضع أخطاء 422 أسفل الحقول المعنية وإزالتها عند التعديل، وعداد حي لحروف الدافع.

---

### معيار التحقق والاختبار (Verification Bar)
- **الواجهة الخلفية** (\`test/app.e2e-spec.ts\`): كتابة اختبارات E2E تتأكد من أن البيانات الصالحة ترجع \`201 Created\`، والخاطئة ترجع \`422 Unprocessable Entity\` مع \`invalidParams\`، والمكررة ترجع \`409 Conflict\`.
- **الواجهة الأمامية** (\`src/features/apply/CohortApplicationForm.test.tsx\`): كتابة اختبارات للمكون تتأكد من رندرة كافة الأقسام وظهور أخطاء 422 أسفل الحقول وتنبيه 409 وإيصال القبول 201.

---

### معيار الإتاحة (Accessibility Bar)
- كل حقل \`<input>\` يجب أن يرتبط بتسمية مطابقة \`<label htmlFor="id">\`.
- عند وجود خطأ في الحقل:
  - إضافة \`aria-invalid="true"\` إلى حقل \`<input>\`.
  - إضافة \`id="[field]-error"\` لنص رسالة الخطأ.
  - إضافة \`aria-describedby="[field]-error"\` إلى حقل \`<input>\`.

---

### المسار المتقدم (اختياري)
- **حفظ مسودة الاستمارة تلقائياً في \`localStorage\` والتعافي من الانهيار** (١.٥–٢ ساعة):
  - بناء خطاف مخصص (\`useFormDraft\` في \`src/features/apply/useFormDraft.ts\`) لتخزين حالة الاستمارة بمؤقت (\`elwarsha:cohort-2:draft\`).
  - استعادة الحقول عند التحميل مع إظهار شريط تنبيه لطيف يتيح الإغلاق، ومسح المسودة فور استجابة الخادم بـ \`201 Created\`.
- **الحماية من سوء الاستخدام وعقد الخطأ 429 عبر \`@nestjs/throttler\`** (١.٥–٢ ساعة):
  - تثبيت وضبط \`@nestjs/throttler\` لتقييد الطلبات (مثلاً ٥ طلبات لكل ٦٠ ثانية لكل IP).
  - صياغة استجابة خطأ 429 مع ترويسة \`Retry-After\` وعرض عداد تنازلي للتبريد في الواجهة الأمامية.`,
      },
      resources: {
        required: [
          {
            title: "نظرة عامة على بروتوكول HTTP (MDN)",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview",
            layers: "Concept",
            format: "Read",
            time: "١٥ دقيقة",
            why: "النموذج الذهني لتواصل العميل والخادم ودورة الطلب والاستجابة والترويسات.",
          },
          {
            title: "طرق طلبات HTTP (MDN Methods)",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods",
            layers: "Concept",
            format: "Read",
            time: "١٠ دقيقة",
            why: "فهم دلالات POST للإرسال مقابل GET للاسترجاع.",
          },
          {
            title: "دليل W3C لإتاحة التحقق في الاستمارات",
            url: "https://www.w3.org/WAI/tutorials/forms/notifications/",
            layers: "Frontend, Accessibility",
            format: "Read",
            time: "١٥ دقيقة",
            why: "معايير الإتاحة: كيفية إعلام قارئات الشاشة بالأخطاء عبر aria-invalid و aria-describedby.",
          },
          {
            title: "تقنيات التحقق في NestJS",
            url: "https://docs.nestjs.com/techniques/validation",
            layers: "Backend",
            format: "Read",
            time: "٢٠ دقيقة",
            why: "إعداد ValidationPipe ومزخرفات class-validator ومصانع الاستثناءات المخصصة.",
          },
          {
            title: "البدء مع React Hook Form",
            url: "https://react-hook-form.com/get-started",
            layers: "Frontend",
            format: "Read",
            time: "٢٥ دقيقة",
            why: "النموذج الذهني لإدارة حقول النموذج غير المقيدة وتسجيل الأخطاء.",
          },
          {
            title: "وضع التخطيط في Cursor (Plan Mode) (اختر واحداً)",
            url: "https://cursor.com/docs/agent/plan-mode",
            layers: "AI",
            format: "Read",
            time: "١٥ دقيقة",
            why: "العمل مع الوكلاء بطريقة التخطيط أولاً؛ اقرأ هذا أو مسارات عمل Claude Code.",
          },
          {
            title: "مسارات العمل الشائعة في Claude Code (اختر واحداً)",
            url: "https://code.claude.com/docs/en/common-workflows",
            layers: "AI",
            format: "Read",
            time: "٢٠ دقيقة",
            why: "الاستكشاف والتخطيط وطلبات السحب؛ اقرأ هذا أو وضع التخطيط في Cursor.",
          },
        ],
        assignment: [
          {
            title: "مرجع دالة setError في React Hook Form",
            url: "https://react-hook-form.com/docs/useform/seterror",
            layers: "Frontend",
            format: "Read",
            time: "١٠ دقيقة",
            why: "طريقة ربط مصفوفة invalidParams الواردة من الخادم بحقول الاستمارة برمجياً.",
          },
          {
            title: "توثيق class-validator",
            url: "https://github.com/typestack/class-validator",
            layers: "Backend",
            format: "Read",
            time: "١٥ دقيقة",
            why: "مرجع شامل لمزخرفات التحقق (@IsEmail و @IsUrl و @MinLength وغيرها).",
          },
          {
            title: "دليل استمارات HTML (MDN)",
            url: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Your_first_form",
            layers: "Frontend",
            format: "Read",
            time: "١٥ دقيقة",
            why: "مرجع عناصر form و fieldset و legend و label الدلالية.",
          },
        ],
        alternative: [
          {
            title: "شرح مرئي: استمارات React Hook Form مع Zod",
            url: "https://www.youtube.com/watch?v=k5jG58q025E",
            layers: "Frontend",
            format: "Watch",
            time: "٣٥ دقيقة",
            why: "فيديو بديل يوضح إدارة الحقول وأخطاء الخادم.",
          },
          {
            title: "شرح مرئي: مخططات DTO والتحقق في NestJS",
            url: "https://www.youtube.com/watch?v=Fh3K009K524",
            layers: "Backend",
            format: "Watch",
            time: "٢٠ دقيقة",
            why: "فيديو بديل يغطي class-validator و ValidationPipe.",
          },
          {
            title: "توثيق محدد المعدل في NestJS (@nestjs/throttler)",
            url: "https://docs.nestjs.com/security/rate-limiting",
            layers: "Backend",
            format: "Read",
            time: "١٥ دقيقة",
            why: "إعداد حراس تقييد الطلبات لمسار منع الهجمات.",
          },
          {
            title: "توثيق Window.localStorage (MDN)",
            url: "https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",
            layers: "Frontend",
            format: "Read",
            time: "١٠ دقيقة",
            why: "أنماط الاستخدام الآمن وحدود التخزين لمسار حفظ المسودة.",
          },
        ],
      },
      reflectionQuestion:
        "ما الذي يتسرب إذا استورد متحكم في الواجهة الخلفية نموذج قاعدة البيانات أو الكيان مباشرة بدلاً من استلام DTO تم التحقق منه؟",
      prerequisites: [
        "الأسبوع الأول: المعمارية وفهم الكود القائم",
        "معرفة أساسية بـ TypeScript و React",
      ],
    },
    3: {
      weekNumber: 3,
      title: "التدفق غير المتزامن و Webhooks",
      tagline: "افصل قبول الطلب عن معالجته الثقيلة لحماية استقرار النظام",
      concept: "التدفق غير المتزامن",
      guidingQuestion: "ليه إضافة المهمة للطابور عند القبول أأمن من عمل عمليات خارجية أثناء طلب HTTP؟",
      bigIdea:
        "عندما ترسل منصة خارجية مثل GitHub إشعار Webhook إلى خادمنا، يجب أن نرد في أجزاء من الثانية. تنفيذ مهام ثقيلة أو استدعاء شبكات أخرى أثناء طلب الـ HTTP يعرض الخادم للانهيار. في هذا الأسبوع، نتتبع دورة حياة أحداث GitHub Webhook من التحقق من توقيع HMAC، ثم إدراج المهمة فوراً في طابور PostgreSQL دائم، وأخيراً معالجتها عبر Worker مستقل.",
      outcomes: [
        "التحقق من توقيع HMAC Webhook بشكل آمن ومقاوم لهجمات التوقيت.",
        "إدراج المهمة في طابور مهام دائم بقاعدة البيانات دون حظر استجابة HTTP السريعة.",
        "فهم استراتيجية قفل السجلات FOR UPDATE SKIP LOCKED في معالجة الطوابير متعددة الخيوط.",
      ],
      coreConcepts: [
        "التواصل غير المتزامن (Asynchronous Decoupling)",
        "التحقق من التوقيع الرقمي (HMAC Signature Verification)",
        "طوابير المهام الدائمة (Persistent Database Job Queues)",
        "معالجة العمال واستراتيجيات القفل الآمن (Worker Pools & Lease Locks)",
      ],
      appliedThroughTheStack: [
        { layer: "NestJS", details: "متحكم Webhooks الموثق وتخزين المهام في جدول Jobs." },
        { layer: "PostgreSQL", details: "استخدام FOR UPDATE SKIP LOCKED لضمان حجز المهمة لعامل واحد دون تكرار." },
        { layer: "Worker", details: "عملية مستقلة دورية تسحب المهام المحجوزة وتنفذها وتعالج الفشل." },
      ],
      assignment: {
        title: "التحقق من توقيع الـ Webhook وإدراج المهام",
        summary:
          "تنفيذ التحقق من توقيع أحداث GitHub Webhook برمجياً وإدراجها كمهام في طابور PostgreSQL مع معالجة آمنة.",
        detailsMd: `### المخرجات البرمجية
- **متحكم Webhooks**: التحقق الآمن من ترويسة \`X-Hub-Signature-256\` باستخدام HMAC SHA256.
- **خدمة المهام (Job Service)**: إدراج حمولة الحدث في جدول \`Job\` بالحالة \`queued\`.
- **معالجة العامل (Worker)**: حجز المهمة بقفل إيجار ومعالجتها ثم تحديث حالتها إلى \`completed\`.`,
      },
      resources: {
        required: [
          {
            title: "توثيق GitHub Webhooks",
            url: "https://docs.github.com/en/webhooks",
            layers: "Backend",
            format: "Read",
            time: "٢٠ دقيقة",
            why: "فهم ترويسات GitHub Webhook وآلية توقيع HMAC.",
          },
        ],
        assignment: [
          {
            title: "دليل PostgreSQL FOR UPDATE SKIP LOCKED",
            url: "https://www.2ndquadrant.com/en/blog/what-is-select-for-update-skip-locked-in-postgresql-9-5/",
            layers: "Database",
            format: "Read",
            time: "١٥ دقيقة",
            why: "آلية تنفيذ طوابير المهام الآمنة في قواعد البيانات العلائقية.",
          },
        ],
        alternative: [],
      },
      reflectionQuestion: "ليه إضافة المهمة للطابور عند القبول أأمن من عمل عمليات خارجية أثناء طلب HTTP؟",
      prerequisites: ["الأسبوع الثاني", "تشغيل عامل الورشة محلياً (Worker)"],
    },
    4: {
      weekNumber: 4,
      title: "المصادقة والتفويض وإدارة الجلسات",
      tagline: "الهوية تحدد من أنت، والصلاحيات تحدد ما يحق لك فعله",
      concept: "المصادقة والتفويض",
      guidingQuestion: "إزاي نضمن أن المسارات محمية تماماً بجلسة حقيقية وصلاحيات دقيقة؟",
      bigIdea:
        "المصادقة (Authentication) تؤكد هوية المستخدم، بينما التفويض (Authorization) يحدد الصلاحيات والإجراءات المسموحة له. نطبق نموذج الجلسات الآمنة مع حراس NestJS Guards والصلاحيات المستندة للقدرات (Capabilities).",
      outcomes: [
        "إثبات حماية المسار بجلسة صالحة ومطابقة القدرات المطلوبة.",
        "التعامل مع ملفات تعريف الارتباط الآمنة (Secure HttpOnly Cookies).",
        "تطبيق صلاحيات مبنية على الأدوار والقدرات دون تسريب منطق التحقق للمتحكمات.",
      ],
      coreConcepts: ["المصادقة (Authentication)", "التفويض (Authorization)", "إدارة الجلسات", "الصلاحيات القائمة على القدرات"],
      appliedThroughTheStack: [
        { layer: "NestJS", details: "AuthGuard و RequireCapability decorators." },
        { layer: "React", details: "سياق الهوية ومفاتيح حماية الواجهات." },
      ],
      assignment: {
        title: "حماية المسارات بنظام القدرات والجلسات",
        summary: "تأمين مسارات النظام بجلسات مشفرة وتطبيق حراس القدرات المعمارية.",
        detailsMd: `### المخرجات البرمجية
- **حارس المصادقة (AuthGuard)**: التحقق من وجود جلسة صالحة وتمرير المستخدم للطلب.
- **مزخرف القدرات (RequireCapability)**: منع الوصول لأي مسار لا يملك المستخدم الصلاحية المحددة له.`,
      },
      resources: {
        required: [
          {
            title: "توثيق حراس NestJS Guards",
            url: "https://docs.nestjs.com/guards",
            layers: "Backend",
            format: "Read",
            time: "٢٠ دقيقة",
            why: "التعرف على نمط الحراس في حماية المسارات.",
          },
        ],
        assignment: [],
        alternative: [],
      },
      reflectionQuestion: "إيه الفرق بين التحقق من الجلسة والتحقق من القدرة (Capability)؟",
      prerequisites: ["الأسبوع الثالث"],
    },
    5: {
      weekNumber: 5,
      title: "تعديل المخطط وقواعد البيانات بلا انقطاع",
      tagline: "تغيير قواعد البيانات الحية يتطلب خطوات توافقية دقيقة",
      concept: "هجرة قواعد البيانات",
      guidingQuestion: "إزاي نعمل هجرة لجدول مستخدم في الإنتاج من غير ما نوقف الخدمة؟",
      bigIdea:
        "في الأنظمة الحية، لا يمكن إسقاط الأعمدة أو تعديلها بخطوة واحدة مفاجئة. نتعلّم نمط Expand and Contract لتنفيذ هجرات Prisma آمنة بدون أي انقطاع في الخدمة.",
      outcomes: [
        "كتابة هجرات آمنة تدعم التوافق مع الإصدارات السابقة.",
        "فصل قراءة البيانات عن كتابتها أثناء مراحل الانتقال.",
      ],
      coreConcepts: ["نمط التوسيع والانكماش (Expand and Contract)", "الهجرة الآمنة (Zero-Downtime Migrations)"],
      appliedThroughTheStack: [
        { layer: "Prisma", details: "إدارة الهجرات وتحديث schema.prisma بحذر." },
        { layer: "PostgreSQL", details: "فهارس آمنة وقيود لا تعطل الجداول." },
      ],
      assignment: {
        title: "هجرة آمنة لجدول حي بنمط Expand and Contract",
        summary: "توسيع مخطط قاعدة البيانات بإضافة أعمدة جديدة مع دعم التوافق التراجعي الكامل.",
        detailsMd: `### المخرجات البرمجية
- **هجرة التوسيع (Expand)**: إضافة الحقل الجديد كحقل اختياري.
- **الكتابة المزدوجة (Dual-write)**: تحديث الخدمة لتكتب في الحقلين القديم والجديد معاً.`,
      },
      resources: {
        required: [
          {
            title: "دليل الهجرة بدون توقف الخدمة (Prisma)",
            url: "https://www.prisma.io/dataguide/types/relational/zero-downtime-migrations",
            layers: "Database",
            format: "Read",
            time: "٢٠ دقيقة",
            why: "فهم استراتيجيات هجرة قواعد البيانات الإنتاجية.",
          },
        ],
        assignment: [],
        alternative: [],
      },
      reflectionQuestion: "ليه مينفعش نمسح عمود من قاعدة البيانات في نفس الـ PR اللي بيوقف استخدامه في الكود؟",
      prerequisites: ["الأسبوع الرابع"],
    },
    6: {
      weekNumber: 6,
      title: "معالجة المهام الخلفية وتزامن العمليات",
      tagline: "التحكم في التزامن يحمي البيانات من التضارب والتكرار",
      concept: "التزامن والعمال",
      guidingQuestion: "إزاي نمنع اثنين Workers من معالجة نفس المهمة في نفس اللحظة؟",
      bigIdea:
        "عند تشغيل أكثر من نسخة من خوادم المعالجة، تظهر مشاكل التنافس (Race Conditions). نستخدم آليات القفل الآمن وعقود الإيجار (Lease Locks) لمعالجة المهام بضمانات تسليم محددة.",
      outcomes: [
        "استخدام عقود إيجار المهام القابلة للتجديد.",
        "استرداد المهام المعلقة التي تعطلت أثناء المعالجة.",
      ],
      coreConcepts: ["عقود الإيجار (Lease Locks)", "إعادة المحاولة مع التراجع الأسي (Exponential Backoff)"],
      appliedThroughTheStack: [
        { layer: "PostgreSQL", details: "حقول lockedAt و lockedBy و attempts." },
        { layer: "Worker", details: "حلقات الاستطلاع والمعالجة الآمنة." },
      ],
      assignment: {
        title: "إدارة عقود إيجار المهام ومعالجة التعطل",
        summary: "تطبيق تجديد قفل الإيجار (Heartbeat) واسترداد المهام المعلقة تلقائياً.",
        detailsMd: `### المخرجات البرمجية
- **تجديد الإيجار**: إرسال نبضات دورية أثناء تنفيذ المهمة.
- **استرداد المهام المتروكة**: إعادة المهام المنتهية صلاحية إيجارها إلى الطابور.`,
      },
      resources: {
        required: [
          {
            title: "أنماط التوزيع والتحكم في التزامن",
            url: "https://martinfowler.com/articles/patterns-of-distributed-systems/",
            layers: "Concept",
            format: "Read",
            time: "٢٥ دقيقة",
            why: "فهم أنماط التزامن في الأنظمة الموزعة.",
          },
        ],
        assignment: [],
        alternative: [],
      },
      reflectionQuestion: "ماذا يحدث إذا انقطع الاتصال بالعامل أثناء معالجة مهمة حيوية؟",
      prerequisites: ["الأسبوع الخامس"],
    },
    7: {
      weekNumber: 7,
      title: "المراقبة والجاهزية ومؤشرات الإنتاج",
      tagline: "إذا لم تستطع قياس أداء نظامك، فأنت لا تعرف إن كان يعمل حقاً",
      concept: "المراقبة والجاهزية",
      guidingQuestion: "إزاي نفرّق بين فحص الحيوية (healthz) وفحص الجاهزية (readyz)؟",
      bigIdea:
        "الأنظمة الإنتاجية تحتاج لمؤشرات واضحة عن صحتها. نطبّق فحوصات Liveness و Readiness وسجلات منظمة مهيكلة تسمح بتشخيص المشكلات فور وقوعها.",
      outcomes: [
        "بناء نقاط نهاية /healthz و /readyz بمعايير دقيقة.",
        "تسجيل الأحداث بصيغة JSON منظمة قابلة للبحث والتحليل.",
      ],
      coreConcepts: ["فحوصات الصحة والجاهزية", "السجلات المهيكلة (Structured Logging)"],
      appliedThroughTheStack: [
        { layer: "NestJS", details: "خدمات فحص صحة الاتصال بقاعدة البيانات والخدمات الخارجية." },
      ],
      assignment: {
        title: "فحوصات الجاهزية والسجلات المهيكلة",
        summary: "بناء نقاط فحص الجاهزية وتوحيد صيغة السجلات لكافة مكونات النظام.",
        detailsMd: `### المخرجات البرمجية
- **نقطة /readyz**: فحص اتصال PostgreSQL والتبعيات الحيوية.
- **المسجل المهيكل**: تسجيل الطلبات بصيغة JSON متوافقة مع أدوات المراقبة.`,
      },
      resources: {
        required: [
          {
            title: "دليل Kubernetes لفحوصات Liveness و Readiness",
            url: "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/",
            layers: "DevOps, Concept",
            format: "Read",
            time: "٢٠ دقيقة",
            why: "المعايير القياسية لفصل الحيوية عن الجاهزية في الإنتاج.",
          },
        ],
        assignment: [],
        alternative: [],
      },
      reflectionQuestion: "متى يجب أن يُرجع فحص الجاهزية 503 رغم أن الخادم يعمل؟",
      prerequisites: ["الأسبوع السادس"],
    },
    8: {
      weekNumber: 8,
      title: "الإطلاق النهائي للمنتج والمراجعة الشاملة",
      tagline: "التتويج البرمجي: منتج متكامل جاهز للمستخدمين الحقيقيين",
      concept: "إطلاق المنتج",
      guidingQuestion: "كيف نضمن جاهزية النظام الكامل للعمل تحت الضغط الواقعي؟",
      bigIdea:
        "الأسبوع الأخير من الورشة مخصص لربط كافة الأجزاء معاً، وإجراء المراجعات النهائية، والتأكد من استيفاء كافة معايير الجودة والأداء والأمان، وإطلاق المنتج أمام الجمهور.",
      outcomes: [
        "تقديم طلب السحب النهائي المكتمل.",
        "المشاركة في العرض الحي ومراجعة المعمارية الكاملة.",
      ],
      coreConcepts: ["الجاهزية للإنتاج (Production Readiness)", "المراجعة الشاملة والتسليم"],
      appliedThroughTheStack: [
        { layer: "Full Stack", details: "الواجهة، الخادم، قاعدة البيانات، وتكامل المستودع." },
      ],
      assignment: {
        title: "طلب السحب النهائي والإطلاق الحي",
        summary: "إغلاق كافة المراجعات ودمج النسخة المستقرة وإطلاق المنتج للجمهور.",
        detailsMd: `### المخرجات البرمجية
- **طلب السحب النهائي (Final PR)**: تدقيق شامل لكافة الاختبارات ومعايير الأداء.
- **العرض الحي (Demo)**: استعراض تدفق النظام بالكامل أمام المجتمع والمهندسين.`,
      },
      resources: {
        required: [
          {
            title: "قائمة مراجعة الإطلاق للإنتاج",
            url: "https://github.com",
            layers: "Full Stack",
            format: "Read",
            time: "١٥ دقيقة",
            why: "التحقق من جاهزية كافة الطبقات للإطلاق.",
          },
        ],
        assignment: [],
        alternative: [],
      },
      reflectionQuestion: "ما هو أهم درس معماري تعلمته خلال الأسابيع الثمانية؟",
      prerequisites: ["الأسابيع السابقة بالكامل"],
    },
};
