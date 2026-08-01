const UPSTREAM_LANG_KEY = 'upstreamLang';
const DEFAULT_LANG = 'ru';
const SUPPORTED_LANGS = ['ru', 'en'];

const translations = {
  ru: {
    'meta.home.title': 'Upstream — Образовательный центр, Алматы',
    'meta.ielts.title': 'IELTS — Upstream Universe',
    'meta.summer.title': 'Летние программы — Upstream Universe',
    'meta.english.title': 'Разговорный английский — Upstream',
    'meta.ait.title': 'AIT — Upstream Universe',
    'meta.sat.title': 'SAT — Upstream Universe',
    'meta.toefl.title': 'TOEFL — Upstream Universe',
    'meta.summerCamp.title': 'Летний лагерь — Upstream Universe',

    'header.home': 'Главная',
    'header.courses': 'Курсы',
    'header.ielts': 'IELTS',
    'header.summer': 'Summer Abroad ✈️',
    'header.summerCamp': 'Summer Camp 🏕️',
    'header.english': 'Английский',
    'header.whatsapp': 'WhatsApp',
    'header.instagram': 'Instagram',
    'header.reviews': 'Отзывы',
    'header.contacts': 'Контакты',
    'header.langButton': 'RU | EN',
    'header.logoAlt': 'Логотип Upstream',
    'header.navAria': 'Основная навигация',
    'header.burgerMenuAria': 'Открыть меню',
    'header.languageButtonAria': 'Выбор языка',

    'hero.titleHtml': 'Английский | <span class="hero-title-highlight">IELTS</span> | Математика<br>Казахский язык | <span class="hero-title-highlight">SAT</span> | TOEFL | AIT',
    'hero.text': 'Международный образовательный центр, который помогает ученикам овладеть английским языком, получить высокие баллы на экзаменах и поступить в ведущие университеты мира.',
    'hero.highlight1.title': '250+',
    'hero.highlight1.text': 'студентов',
    'hero.highlight2.title': 'IELTS 7.5',
    'hero.highlight2.text': 'средний балл',
    'hero.highlight3.title': '10+',
    'hero.highlight3.text': 'лет',
    'hero.cta1': 'Получить консультацию',
    'hero.cta1Href': 'https://wa.me/77055844467?text=Здравствуйте!%20Хочу%20получить%20консультацию',
    'hero.cta2': 'Все курсы',
    'hero.panelText': 'Upstream Almaty — 10 лет формируем фундамент успешного будущего детей',
    'hero.imageAlt': 'Команда Upstream',
    'hero.kidsExpectTitle': 'Что ждёт детей:',
    'hero.campImageAlt': 'Летний лагерь Upstream',
    'hero.mapImageAlt': 'Локация Upstream на карте',

    'services.title': 'Наши курсы',
    'services.subtitle': 'Коротко и по делу — программы, которые работают: от подготовки к экзаменам до развития творческого потенциала.',

    'course.english.title': 'Английский',
    'course.english.desc': 'Живая практика, уверенная речь и понятная грамматика для детей и подростков.',
    'course.english.cta': 'Подробнее',
    'course.english.imageAlt': 'Курс английского языка',
    'course.ielts.title': 'Подготовка к IELTS',
    'course.ielts.desc': 'Стратегия, практика по модулям и живое общение с носителями языка.', 
    'course.ielts.cta': 'Подробнее об IELTS',
    'course.ielts.imageAlt': 'Подготовка к IELTS',
    'course.summer.title': 'Summer Abroad',
    'course.summer.desc': 'Английский язык за границей, новые культуры и яркий международный опыт.',
    'course.summer.cta': 'Узнать больше',
    'course.summer.imageAlt': 'Летняя программа за границей',
    'course.ait.title': 'AIT – Admission Insights Test',
    'course.ait.desc': 'Аналитика, эссе и стратегия для уверенного поступления в университет.',
    'course.ait.cta': 'Подробнее',
    'course.ait.imageAlt': 'Подготовка к AIT',
    'course.ait.whatsappHref': 'https://wa.me/77055844467?text=Здравствуйте!%20Хочу%20узнать%20подробнее%20про%20AIT',
    'course.sat.title': 'SAT Preparation',
    'course.sat.desc': 'Математика, чтение и письмо для поступления в вузы США.',
    'course.sat.cta': 'Подробнее',
    'course.sat.imageAlt': 'Подготовка к SAT',
    'course.sat.whatsappHref': 'https://wa.me/77055844467?text=Здравствуйте!%20Хочу%20узнать%20подробнее%20про%20SAT',
    'course.toefl.title': 'TOEFL Preparation',
    'course.toefl.desc': 'Все секции экзамена и практика с опытными преподавателями.',
    'course.toefl.cta': 'Подробнее',
    'course.toefl.imageAlt': 'Подготовка к TOEFL',
    'course.toefl.whatsappHref': 'https://wa.me/77055844467?text=Здравствуйте!%20Хочу%20узнать%20подробнее%20про%20TOEFL',
    'course.summerCamp.title': 'Summer Camp',
    'course.summerCamp.desc': 'Летний лагерь в Алматы: английский язык каждый день, игры, спорт и творческие мастер-классы.',
    'course.summerCamp.cta': 'Подробнее',
    'course.summerCamp.imageAlt': 'Летний лагерь Upstream',

    'promo.badge': 'SUMMER ABROAD',
    'promo.badge': 'SUMMER ABROAD',
    'promo.title': 'Учите английский за границей этим летом с Upstream Universe',
    'promo.text': 'Проведите лето за границей, изучая английский в международной среде, открывая новые культуры и создавая опыт, который меняет будущее.',
    'promo.button': 'Подробнее',
    'promo.h1.title': 'USA, UK, Европа',
    'promo.h1.text': 'Кардинально новый летний формат',
    'promo.h2.title': 'Носители языка',
    'promo.h2.text': 'Живая практика и уверенная речь',
    'promo.h3.title': 'Комплексная поддержка',
    'promo.h3.text': 'от перелётов до проживания',

    'camp.title': 'Летний лагерь 2026',
    'camp.text': 'Это яркое лето для детей, которое помогает раскрыть талант, укрепить уверенность и провести время с пользой. Каждый день — активные игры, творческие занятия, английский в живом формате и много общения.',
    'camp.expectTitle': 'Что ждёт детей:',
    'camp.item1': 'яркие активности и новые знакомства',
    'camp.item2': 'развитие английского и коммуникации',
    'camp.item3': 'творчество, движение и уверенность в себе',
    'camp.note': 'Запись и детали — в WhatsApp: <a href="https://wa.me/77055844467">+7 (705) 584-44-67</a>',
    'camp.learnMore': 'Узнать больше о лагере',
    'camp.expectTitle': 'Что ждёт детей:',

    'location.title': 'Локация',
    'location.address': 'Улица Сагдиева, 78, Алматы',
    'location.mapBadge': 'Открыть в 2GIS',
    'location.mapLink': 'Открыть маршрут в 2GIS',
    'location.hours': 'Пн–Пт 09:00–17:00',
    'location.phone': 'WhatsApp: +7 (705) 584-44-67',
    'location.note': '28 min from city center • Many bus routes • Parking available',
    'location.mapBadge': 'Открыть в 2GIS',
    'location.mapLink': 'Открыть маршрут в 2GIS',
    'location.mapTitle': 'Upstream Universe',
    'location.mapSubtitle': 'г. Алматы, ул. Сагдиева, 78',
    'location.mapButton': 'Открыть карту',

    'reviews.title': 'Отзывы',
    'reviews.note': 'Больше отзывов — в Instagram: <a href="https://instagram.com/upstream.almaty" target="_blank">@upstream.almaty</a>',
    'reviews.quote1': '«Учитель по IELTS помог пройти экзамен с лучшим для нас результатом — благодарны за структурированный подход и регулярную обратную связь.»',
    'reviews.name1': '— Данияр, студент',
    'reviews.quote2': '«Математика стала понятна: задания разложили по шагам, и ребёнок начал получать 5 и 6 на контрольных.»',
    'reviews.name2': '— Айжан, мама',
    'reviews.quote3': '«Летний лагерь — идеальное сочетание обучения и активностей. Дети вернулись вдохновлёнными и с новыми друзьями.»',
    'reviews.name3': '— Ерлан, родитель',
    'reviews.avatar1Alt': 'Аватар ученика',
    'reviews.avatar2Alt': 'Аватар родителя',
    'reviews.avatar3Alt': 'Аватар участника лагеря',
    'reviews.quote1': '«Учитель по IELTS помог пройти экзамен с лучшим для нас результатом — благодарны за структурированный подход и регулярную обратную связь.»',
    'reviews.name1': '— Данияр, студент',
    'reviews.quote2': '«Математика стала понятна: задания разложили по шагам, и ребёнок начал получать 5 и 6 на контрольных.»',
    'reviews.name2': '— Айжан, мама',
    'reviews.quote3': '«Летний лагерь — идеальное сочетание обучения и активностей. Дети вернулись вдохновлёнными и с новыми друзьями.»',
    'reviews.name3': '— Ерлан, родитель',
    'reviews.avatar1Alt': 'Аватар ученика',
    'reviews.avatar2Alt': 'Аватар родителя',
    'reviews.avatar3Alt': 'Аватар участника лагеря',
    'reviews.quote4': '«Отличная подготовка к SAT — сын подтянул математику и уверенно сдал экзамен с высоким баллом.»',
    'reviews.name4': '— Марат, папа',
    'reviews.quote5': '«Через три месяца дочка начала свободно общаться на английском — большой прогресс благодаря живой практике на занятиях.»',
    'reviews.name5': '— Гульнара, мама',

    'footer.address': 'Улица Сагдиева, 78, Алматы',
    'footer.note': 'Подготовка к экзаменам, творческие курсы и живые занятия в атмосфере уверенного роста.',
    'footer.contactTitle': 'Напишите нам',
    'footer.whatsapp': 'WhatsApp',
    'footer.whatsappHref': 'https://wa.me/77055844467',
    'footer.instagram': 'Instagram',
    'footer.2gis': '2GIS',

    'summer.hero.badge': 'SUMMER LANGUAGE PROGRAMS',
    'summer.hero.title': 'Летние программы за границей от Upstream Universe',
    'summer.hero.text': 'Проведите лето, изучая английский в международной среде, раскрывая новые города и получая поддержку на каждом этапе поездки.',
    'summer.highlight1.title': '10+ стран',
    'summer.highlight1.text': 'Лучшие летние направления',
    'summer.highlight2.title': 'Погружение',
    'summer.highlight2.text': 'Английский в реальной жизни',
    'summer.highlight3.title': 'Полная поддержка',
    'summer.highlight3.text': 'Перелёт, проживание, визу и сопровождение',
    'summer.cta1': 'Подать заявку',
    'summer.cta2': 'Английский',
    'summer.section1.eyebrow': 'Летний международный опыт',
    'summer.section1.title': 'Путешествуйте и учите английский этим летом.',
    'summer.section1.text': 'Наши программы сочетают качественные уроки языка с путешествиями, культурным погружением и поддержкой на каждом шагу. Учитесь, общайтесь и растите в лучших городах мира.',
    'summer.section2.eyebrow': 'Направления',
    'summer.section2.title': 'Выберите страну для своего летнего путешествия.',
    'summer.section2.text': 'Студенты могут поехать в США, Великобританию, Германию, Францию, Чехию и Нидерланды, одновременно улучшая английский и наслаждаясь культурным опытом.',
    'summer.destination1.title': 'USA',
    'summer.destination1.text': 'Современные кампусы, международное сообщество и сильная англоязычная среда.',
    'summer.destination2.title': 'United Kingdom',
    'summer.destination2.text': 'Классическая академическая атмосфера с глубоким культурным погружением.',
    'summer.destination3.title': 'Germany',
    'summer.destination3.text': 'Идеально для тех, кто хочет структурированное, вдохновляющее и организованное обучение.',
    'summer.destination4.title': 'France',
    'summer.destination4.text': 'Сочетание языка, искусства и европейского стиля жизни.',
    'summer.destination5.title': 'Czech Republic',
    'summer.destination5.text': 'Гибко и ярко, с гостеприимным входом в международную учебу.',
    'summer.destination6.title': 'The Netherlands',
    'summer.destination6.text': 'Современно, разнонационально и идеально для современных студентов.',
    'summer.section2.eyebrow': 'Что включено',
    'summer.section2.title': 'Всё, чтобы ваше лето прошло комфортно и эффектно.',
    'summer.include.flights': 'Перелёты',
    'summer.include.flights.text': 'Билеты туда и обратно организованы с комфортом и ответственностью.',
    'summer.include.accommodation': 'Проживание',
    'summer.include.accommodation.text': 'Безопасное и удобное жильё в студенческих районах.',
    'summer.include.meals': 'Питание',
    'summer.include.meals.text': 'Сбалансированное питание для поддержки учебного ритма.',
    'summer.include.classes': 'Английские занятия',
    'summer.include.classes.text': 'Структурированные уроки с живой коммуникацией и уверенностью.',
    'summer.include.speakers': 'Носители языка',
    'summer.include.speakers.text': 'Практика с профессионалами и свободно говорящими педагогами.',
    'summer.include.visa': 'Визовая поддержка',
    'summer.include.visa.text': 'Помощь с документами и заявкой на визу.',
    'summer.include.insurance': 'Медицинская страховка',
    'summer.include.insurance.text': 'Защита здоровья и душевное спокойствие во время поездки.',
    'summer.include.transfers': 'Трансферы',
    'summer.include.transfers.text': 'Безопасный трансфер из аэропорта до жилья.',
    'summer.include.support': '24/7 поддержка',
    'summer.include.support.text': 'Круглосуточная помощь для студентов и семей.',
    'summer.include.certificate': 'Сертификат',
    'summer.include.certificate.text': 'Официальное подтверждение прохождения программы.',
    'summer.cta.title': 'Подайте заявку на летнюю программу',
    'summer.cta.text': 'Пусть это лето станет новым уровнем. Присоединяйтесь к Upstream Universe и получите международный опыт, английский и поддержку от старта до финиша.',
    'summer.cta.button': 'Начать заявку',
    'summer.gallery.label1': 'USA',
    'summer.gallery.label2': 'UK',
    'summer.gallery.label3': 'Europe',
    'summer.gallery.label4': 'Campus Life',
    'summer.gallery.alt1': 'Летний опыт путешествий 1',
    'summer.gallery.alt2': 'Летний опыт путешествий 2',
    'summer.gallery.alt3': 'Летний опыт путешествий 3',
    'summer.gallery.alt4': 'Летний опыт путешествий 4',
    'summer.gallery.aria1': 'Открыть фото летней программы 1',
    'summer.gallery.aria2': 'Открыть фото летней программы 2',
    'summer.gallery.aria3': 'Открыть фото летней программы 3',
    'summer.gallery.aria4': 'Открыть фото летней программы 4',
    'summer.hero.imageAlt': 'Студенты едут за границу на летнюю программу',
    'summer.lightbox.close': 'Закрыть галерею',
    'summer.lightbox.previous': 'Предыдущее изображение',
    'summer.lightbox.next': 'Следующее изображение',
    'summer.lightbox.alt': 'Превью летней программы',
    'summer.section3.eyebrow': 'Что включено',
    'summer.section3.title': 'Каждый шаг программы продуман заранее — от поездки до поддержки на месте.',
    'summer.gallery.label1': 'USA',
    'summer.gallery.label2': 'UK',
    'summer.gallery.label3': 'Europe',
    'summer.gallery.label4': 'Campus Life',
    'summer.lightbox.close': 'Закрыть галерею',
    'summer.lightbox.previous': 'Предыдущее изображение',
    'summer.lightbox.next': 'Следующее изображение',
    'summer.footer.note': 'Премиальное обучение английскому и летние программы за границей, которые помогают расти, набирать уверенность и получать новые возможности.',

    'english.hero.badge': 'РАЗГОВОРНЫЙ АНГЛИЙСКИЙ',
    'english.hero.title': 'Говорите свободно — без страха и громоздкой теории',
    'english.hero.text': 'Наш подход — это живая речь: диалоги, проекты и практика в реальных ситуациях. Уроки строятся так, чтобы вы говорили больше и становились уверенными быстро.',
    'english.hero.imageAlt': 'Разговорный английский',
    'english.program.adults.title': 'Для взрослых',
    'english.program.adults.li1': 'Разговорная практика и навыки общения',
    'english.program.adults.li2': 'IELTS и академическое направление',
    'english.program.adults.li3': 'Вечерние и индивидуальные форматы',
    'english.program.school.title': 'Для школьников',
    'english.program.school.li1': 'Укрепление оценок и уверенная речь',
    'english.program.school.li2': 'Подготовка к экзаменам и тестам',
    'english.program.school.li3': 'Проектная и групповая работа',
    'english.program.children.title': 'Для детей',
    'english.program.children.li1': 'Игры и занятия для первых слов',
    'english.program.children.li2': 'Малые группы для уверенности',
    'english.program.children.li3': 'Клубы и творческие активности',
    'english.program.ielts.title': 'IELTS',
    'english.program.ielts.li1': 'Целевые тренировки по модулям',
    'english.program.ielts.li2': 'Экзаменационные симуляции и фидбек',
    'english.program.ielts.li3': 'Персональный план до нужного балла',
    'english.programs.title': 'Программы для любого возраста',
    'english.programs.subtitle': 'От первых слов до делового английского — подберём формат, который подходит именно вам.',
    'english.program.teenagers.title': 'Для подростков',
    'english.program.teenagers.li1': 'Укрепление оценок и уверенная речь',
    'english.program.teenagers.li2': 'Подготовка к экзаменам и тестам',
    'english.program.teenagers.li3': 'Проектная и групповая работа',
    'english.program.corporate.title': 'Корпоративный английский',
    'english.program.corporate.li1': 'Деловая переписка и переговоры',
    'english.program.corporate.li2': 'Групповые программы для команд и компаний',
    'english.program.corporate.li3': 'Гибкий график под рабочие задачи',
    'english.hero.highlight1.title': 'Практика 70%',
    'english.hero.highlight1.text': 'говорим и используем язык',
    'english.hero.highlight2.title': 'Chat-поддержка',
    'english.hero.highlight2.text': 'вопросы и помощь между уроками',
    'english.hero.highlight3.title': 'Носители и опытные преподаватели',
    'english.hero.highlight3.text': 'реальная модель речи',
    'english.hero.cta': 'Записаться',
    'english.hero.imageAlt': 'Разговорный английский',
    'english.pageTitle': 'Разговорный английский — Upstream',
    'english.section1.title': 'Что такое разговорный английский?',
    'english.section1.subtitle': 'Это формат, где основное — умение выражать мысли и легко общаться. Мы строим уроки вокруг разговора, чтобы язык не оставался только в тетрадке.',
    'english.section1.note': 'Обучение в нашем центре — это сочетание живых практик и уютной академической поддержки. Мы готовим не к “зубрёже”, а к реальным диалогам на уроках, в чате и за пределами класса.',
    'english.section1.footerNote': 'Почему мы? Потому что в Upstream учеба идёт вместе с общением: наши уроки делают английский живым, понятным и полезным начиная с первого занятия.',
    'english.section2.cta': 'Узнать подробности и записаться',
    'english.section1.footerNote': 'Почему мы? Потому что в Upstream учеба идёт вместе с общением: наши уроки делают английский живым, понятным и полезным начиная с первого занятия.',
    'english.section2.cta': 'Узнать подробности и записаться',
    'english.info1.title': 'Удобно и понятно',
    'english.info1.text': 'Мы объясняем правила через примеры, а не через длинные формулы.',
    'english.info2.title': 'Реальные темы',
    'english.info2.text': 'Говорим о школе, хобби, путешествиях и подготовке к экзамену — то, что пригодится сразу.',
    'english.info3.title': 'Развитие уверенности',
    'english.info3.text': 'Каждое занятие помогает снизить страх говорить и набирать скорость речи.',
    'english.section2.title': 'Как работает чат и поддержка',
    'english.section2.subtitle': 'Чат — это ваш быстрый доступ к заданию, объяснению и обратной связи. Мы используем его как часть курса, чтобы прогресс не прерывался.',
    'english.info4.title': 'Ответы в реальном времени',
    'english.info4.text': 'Вопросы по домашке, произношению или словарю решаются быстро прямо в чате.',
    'english.info5.title': 'Поддержка между уроками',
    'english.info5.text': 'Вы получаете полезные материалы, подсказки и мотивацию, даже когда занятие уже закончилось.',
    'english.info6.title': 'Групповое внимание',
    'english.info6.text': 'Чат помогает чувствовать команду — ученики обмениваются успехами, а преподаватель следит за прогрессом.',
    'english.final.title': 'Готовы начать говорить?',
    'english.final.text': 'Запишитесь на пробный урок — мы оценим уровень, подберём группу и расскажем, как быстро включить язык в повседневную практику.',
    'english.final.button': 'Записаться на пробный урок',
    'english.footer.note': 'Ваш курс к уверенности и свободному общению на английском.',

    'ielts.hero.badge': 'IELTS PROGRAM',
    'ielts.hero.title': 'IELTS — ключ к международному образованию и возможностям',
    'ielts.hero.text': 'Мы не продаем просто английский язык. Мы даем будущие возможности, уверенность и путь к учебе за границей.',
    'ielts.hero.imageAlt': 'Обучение IELTS в офисе Upstream',
    'ielts.hero.highlight1.title': 'Готовность',
    'ielts.hero.highlight1.text': 'к экзамену уже через 3 месяца',
    'ielts.hero.highlight2.title': 'Преподаватели',
    'ielts.hero.highlight2.text': 'с опытом в IELTS и носители языка',
    'ielts.hero.highlight3.title': 'Фокус',
    'ielts.hero.highlight3.text': 'на настоящей англоязычной коммуникации',
    'ielts.hero.cta': 'Записаться',
    'ielts.eyebrow.why': 'Почему IELTS?',
    'ielts.eyebrow.benefits': 'Преимущества',
    'ielts.eyebrow.preparation': 'Подготовка в Upstream',
    'ielts.section1.title': 'Что такое IELTS?',
    'ielts.section1.subtitle': 'IELTS — это международный экзамен по английскому, который показывает, что вы уверенно понимаете, говорите и думаете на языке в реальных академических и профессиональных ситуациях.',
    'ielts.section1.note': 'Это не просто тест: это стандарт, по которому принимают документы университеты, работодатели и государственные программы по всему миру.',
    'ielts.info1.title': 'Academic и General',
    'ielts.info1.text': 'Academic нужен для поступления в университеты и магистратуры, General — для работы, миграции и профессиональных программ.',
    'ielts.info2.title': 'Четкие критерии',
    'ielts.info2.text': 'Ваша оценка складывается из чтения, письма, аудирования и говорения — все они измеряются по единой шкале от 0 до 9.',
    'ielts.info3.title': 'Международный авторитет',
    'ielts.info3.text': 'IELTS признают в США, Великобритании, Канаде, Австралии и в сотнях вузов и работодателей по всему миру.',
    'ielts.section2.title': 'Зачем нужен IELTS?',
    'ielts.section2.subtitle': 'Это привычный и уважительный способ доказать свой уровень английского при поступлении, поиске стажировок и международной карьере.',
    'ielts.section2.note': 'Сертификат IELTS работает как ваш профессиональный паспорт: он показывает, что вы готовы учиться и работать на английском языке там, где это действительно важно.',
    'ielts.benefit1.title': 'Поступление в лучшие вузы',
    'ielts.benefit1.text': 'Результат IELTS автоматически делает вашу заявку сильнее перед приемной комиссией.',
    'ielts.benefit2.title': 'Работа за границей',
    'ielts.benefit2.text': 'IELTS подтверждает вашу готовность работать в международной компании и помогает пройти языковое собеседование.',
    'ielts.benefit3.title': 'Уверенность в будущем',
    'ielts.benefit3.text': 'Вы не просто сдаёте экзамен — вы получаете инструмент, который будет действовать несколько лет и расширит ваши возможности.',
    'ielts.section3.title': 'Наши преподаватели',
    'ielts.section3.subtitle': 'Команда включает опытных наставников IELTS и носителей языка, которые помогают не просто подготовиться к экзамену, но и говорить уверенно на английском во всех ситуациях.',
    'ielts.teacher1.title': 'Носители языка',
    'ielts.teacher1.text': 'Постоянная практика с носителями позволяет быстрее привыкнуть к естественной речи и понять живую английскую интонацию.',
    'ielts.teacher2.title': 'Экзаменационная практика',
    'ielts.teacher2.text': 'Каждая тема разбирается через реальные кейсы IELTS: письменные эссе, аудирование и устная речь.',
    'ielts.teacher3.title': 'Индивидуальный маршрут',
    'ielts.teacher3.text': 'Сначала диагностика, потом план до нужного балла — мы готовим не «наугад», а по вашей текущей скорости прогресса.',
    'ielts.results.title': 'Результаты наших студентов IELTS',
    'ielts.results.subtitle': 'Реальные достижения. Реальные истории успеха.',
    'ielts.results.text': 'Студенты по нашим программам достигают сильных результатов IELTS благодаря персональной обратной связи и регулярной практике.',
    'ielts.stats1.title': '250+ студентов',
    'ielts.stats1.text': 'добираются до уверенных результатов IELTS',
    'ielts.stats2.title': 'Средний балл 7.0+',
    'ielts.stats2.text': 'у самых целеустремлённых учеников',
    'ielts.stats3.title': 'Носители языка',
    'ielts.stats3.text': 'для живого общения и готовности к экзамену',
    'ielts.stats4.title': '4.9 из 5',
    'ielts.stats4.text': 'по отзывам и результатам учеников',
    'ielts.final.title': 'Зачем начинать прямо сейчас?',
    'ielts.final.text': 'Чем раньше вы начнёте, тем быстрее вы получите уверенность, нужный балл и возможность выбирать лучшие программы и вакансии. Время подготовки — это ваш выигрыш в будущем.',
    'ielts.result1.label': 'Проверенный результат',
    'ielts.result2.label': 'Проверенный результат',
    'ielts.result3.label': 'Проверенный результат',
    'ielts.result4.label': 'Проверенный результат',
    'ielts.result1.aria': 'Открыть результат IELTS 1',
    'ielts.result2.aria': 'Открыть результат IELTS 2',
    'ielts.result3.aria': 'Открыть результат IELTS 3',
    'ielts.result4.aria': 'Открыть результат IELTS 4',
    'ielts.result1.alt': 'Результат IELTS 1',
    'ielts.result2.alt': 'Результат IELTS 2',
    'ielts.result3.alt': 'Результат IELTS 3',
    'ielts.result4.alt': 'Результат IELTS 4',
    'ielts.final.li1': 'Снижение стресса перед экзаменом',
    'ielts.final.li2': 'Выработка привычки говорить по-английски каждый день',
    'ielts.final.li3': 'Построенный план, который ведёт к нужному баллу',
    'ielts.final.button': 'Получить консультацию',
    'ielts.footer.note': 'Ваш курс к IELTS, будущему и международным возможностям.',

    'ielts.topuni.eyebrow': 'Топ университеты',
    'ielts.where.title': 'Где может помочь IELTS?',
    'ielts.where.subtitle': 'Высокий балл IELTS открывает больше вариантов при поступлении в ведущие вузы Казахстана.',
    'ielts.where.imageAlt': 'Nazarbayev University',
    'ielts.where.card1.title': 'Nazarbayev University',
    'ielts.where.card1.text': 'IELTS входит в число сертификатов, которые учитываются при поступлении в Nazarbayev University.',
    'ielts.where.card2.title': 'Ведущие вузы Казахстана',
    'ielts.where.card2.text': 'Многие казахстанские университеты признают IELTS и учитывают его при поступлении на англоязычные программы.',
    'ielts.where.note': 'Важно: в рамках действующих правил приёма высокий балл IELTS может дать до 50 дополнительных баллов ЕНТ (UNT) в отдельных казахстанских вузах. Точные условия всегда уточняйте в приёмной комиссии выбранного университета — IELTS не гарантирует поступление, но усиливает вашу заявку.',
    'ielts.abroad.eyebrow': 'Учёба за рубежом',
    'ielts.abroad.title': 'Учёба за рубежом с IELTS',
    'ielts.abroad.subtitle': 'IELTS признают тысячи университетов по всему миру — вот основные регионы, где сертификат особенно востребован.',
    'ielts.abroad.country1.title': '🇺🇸 США',
    'ielts.abroad.country1.text': 'Тысячи американских колледжей и университетов принимают IELTS наравне с TOEFL.',
    'ielts.abroad.country2.title': '🇬🇧 Великобритания',
    'ielts.abroad.country2.text': 'IELTS — основной языковой тест для поступления в британские университеты.',
    'ielts.abroad.country3.title': '🇨🇦 Канада',
    'ielts.abroad.country3.text': 'Канадские вузы широко признают IELTS при поступлении иностранных студентов.',
    'ielts.abroad.country4.title': '🇦🇺 Австралия',
    'ielts.abroad.country4.text': 'IELTS — обязательное требование для визы и поступления в австралийские университеты.',
    'ielts.abroad.country5.title': '🇪🇺 Европа',
    'ielts.abroad.country5.text': 'Многие англоязычные программы в Европе принимают IELTS как подтверждение уровня языка.',

    'ait.hero.badge': 'AIT PROGRAM',
    'ait.hero.title': 'AIT — уверенная подготовка к вступительному тесту',
    'ait.hero.text': 'Admission Insights Test оценивает аналитическое мышление, эссе и логику — мы готовим учеников проходить его спокойно и результативно.',
    'ait.hero.highlight1.title': 'Разбор формата',
    'ait.hero.highlight1.text': 'структура теста и типы заданий',
    'ait.hero.highlight2.title': 'Практика эссе',
    'ait.hero.highlight2.text': 'аргументация и структура письма',
    'ait.hero.highlight3.title': 'Индивидуальный план',
    'ait.hero.highlight3.text': 'подготовка под ваш срок и цель',
    'ait.hero.cta': 'Записаться',
    'ait.hero.imageAlt': 'Подготовка к AIT в Upstream',
    'ait.section1.title': 'Что такое AIT?',
    'ait.section1.subtitle': 'AIT (Admission Insights Test) — вступительный тест, который используют университеты и колледжи для оценки готовности абитуриента к обучению на английском языке.',
    'ait.section1.note': 'Тест проверяет не заученные факты, а умение анализировать текст, строить аргументы и писать структурированное эссе — навыки, которые пригодятся на протяжении всей учёбы.',
    'ait.info1.title': 'Аналитическое мышление',
    'ait.info1.text': 'Задания на логику и работу с информацией показывают, как вы решаете нестандартные задачи.',
    'ait.info2.title': 'Эссе и письмо',
    'ait.info2.text': 'Нужно ясно и последовательно изложить позицию — этому мы учим шаг за шагом.',
    'ait.info3.title': 'Понимание текста',
    'ait.info3.text': 'Работа с академическими текстами разного уровня сложности готовит к настоящей учебной нагрузке.',
    'ait.section2.title': 'Кому нужен AIT и почему это важно',
    'ait.section2.subtitle': 'AIT подходит школьникам и абитуриентам, которые планируют поступать в программы с обучением на английском языке.',
    'ait.benefit1.title': 'Для поступающих в вуз',
    'ait.benefit1.text': 'Результат теста часто входит в пакет документов при поступлении на англоязычные программы.',
    'ait.benefit2.title': 'Для уверенности на экзамене',
    'ait.benefit2.text': 'Знакомый формат и практика снижают стресс и помогают показать реальный уровень знаний.',
    'ait.benefit3.title': 'Для развития мышления',
    'ait.benefit3.text': 'Подготовка к AIT прокачивает аналитические навыки, которые пригодятся в университете и за его пределами.',
    'ait.section3.title': 'Как наши преподаватели готовят к AIT',
    'ait.section3.subtitle': 'Мы начинаем с диагностики и строим программу вокруг ваших сильных и слабых сторон — без лишней теории.',
    'ait.teacher1.title': 'Диагностика уровня',
    'ait.teacher1.text': 'Пробный тест показывает, на чём стоит сосредоточиться в первую очередь.',
    'ait.teacher2.title': 'Практика на реальных заданиях',
    'ait.teacher2.text': 'Разбираем примеры заданий и учимся укладываться во время экзамена.',
    'ait.teacher3.title': 'Обратная связь по эссе',
    'ait.teacher3.text': 'Каждая работа разбирается индивидуально: структура, аргументы, язык.',
    'ait.final.title': 'Готовы начать подготовку к AIT?',
    'ait.final.text': 'Запишитесь на консультацию — определим ваш уровень и составим понятный план подготовки к тесту.',
    'ait.final.button': 'Получить консультацию',
    'ait.footer.note': 'Ваш путь к уверенному поступлению в университет.',

    'sat.hero.badge': 'SAT PREPARATION',
    'sat.hero.title': 'SAT — фундамент для поступления в зарубежные университеты',
    'sat.hero.text': 'Готовим к математике, чтению и письменной части SAT — системно, с реальными пробными тестами и разбором ошибок.',
    'sat.hero.highlight1.title': 'Математика',
    'sat.hero.highlight1.text': 'от базовых тем до сложных задач',
    'sat.hero.highlight2.title': 'Reading & Writing',
    'sat.hero.highlight2.text': 'работа с текстом и грамматикой',
    'sat.hero.highlight3.title': 'Пробные тесты',
    'sat.hero.highlight3.text': 'формат и хронометраж настоящего экзамена',
    'sat.hero.cta': 'Записаться',
    'sat.hero.imageAlt': 'Подготовка к SAT в Upstream',
    'sat.section1.title': 'Что такое SAT?',
    'sat.section1.subtitle': 'SAT (Scholastic Assessment Test) — стандартизированный экзамен, который часто используют колледжи и университеты США при рассмотрении заявок абитуриентов.',
    'sat.info1.title': 'Математика',
    'sat.info1.text': 'Алгебра, геометрия и анализ данных — с акцентом на скорость и точность решений.',
    'sat.info2.title': 'Чтение и анализ текста',
    'sat.info2.text': 'Работа с художественными и научными текстами, поиск главной мысли и аргументов.',
    'sat.info3.title': 'Письмо и грамматика',
    'sat.info3.text': 'Правила языка и редактирование текста в условиях ограниченного времени.',
    'sat.section2.title': 'Зачем нужен SAT',
    'sat.section2.subtitle': 'Хороший результат SAT усиливает заявку абитуриента и открывает больше вариантов при поступлении за рубеж.',
    'sat.benefit1.title': 'Для поступления за рубеж',
    'sat.benefit1.text': 'Многие университеты рассматривают SAT как часть общего пакета документов абитуриента.',
    'sat.benefit2.title': 'Для стипендий',
    'sat.benefit2.text': 'Высокий балл может повысить шансы на получение стипендиальных программ отдельных вузов.',
    'sat.benefit3.title': 'Для уверенности в себе',
    'sat.benefit3.text': 'Структурированная подготовка снижает тревожность перед экзаменом и учит управлять временем.',
    'sat.universities.title': 'Где рассматривают результаты SAT',
    'sat.universities.subtitle': 'Требования у каждого университета свои — уточняйте актуальные условия приёмной комиссии выбранного вуза. Ниже — общие ориентиры по регионам.',
    'sat.university1.title': '🇺🇸 США',
    'sat.university1.text': 'Многие американские колледжи и университеты принимают SAT как часть заявки абитуриента.',
    'sat.university2.title': '🇬🇧 Великобритания',
    'sat.university2.text': 'Ряд программ рассматривает SAT наравне с другими международными квалификациями.',
    'sat.university3.title': '🇨🇦 Канада',
    'sat.university3.text': 'Некоторые канадские университеты принимают SAT при поступлении иностранных абитуриентов.',
    'sat.university4.title': '🇪🇺 Европа',
    'sat.university4.text': 'Отдельные международные программы в Европе также учитывают результаты SAT.',
    'sat.section3.title': 'Как мы готовим к SAT',
    'sat.section3.subtitle': 'Программа строится вокруг пробных тестов, разбора ошибок и постепенного роста результата.',
    'sat.teacher1.title': 'Входная диагностика',
    'sat.teacher1.text': 'Определяем стартовый уровень по каждой секции экзамена.',
    'sat.teacher2.title': 'Регулярные пробники',
    'sat.teacher2.text': 'Отслеживаем прогресс и корректируем план подготовки.',
    'sat.teacher3.title': 'Разбор ошибок',
    'sat.teacher3.text': 'Каждая ошибка становится точкой роста — разбираем её до полного понимания.',
    'sat.final.title': 'Готовы начать подготовку к SAT?',
    'sat.final.text': 'Запишитесь на консультацию — оценим ваш уровень и подберём оптимальный темп подготовки.',
    'sat.final.button': 'Получить консультацию',
    'sat.footer.note': 'Ваш путь к поступлению в зарубежный университет.',

    'toefl.hero.badge': 'TOEFL PREPARATION',
    'toefl.hero.title': 'TOEFL — английский для учёбы за границей',
    'toefl.hero.text': 'Готовим ко всем секциям TOEFL iBT: чтение, аудирование, письмо и говорение — с фокусом на академический английский.',
    'toefl.hero.highlight1.title': '4 секции',
    'toefl.hero.highlight1.text': 'Reading, Listening, Writing, Speaking',
    'toefl.hero.highlight2.title': 'Академический английский',
    'toefl.hero.highlight2.text': 'лексика и стиль университетских текстов',
    'toefl.hero.highlight3.title': 'Практика говорения',
    'toefl.hero.highlight3.text': 'регулярные устные задания с обратной связью',
    'toefl.hero.cta': 'Записаться',
    'toefl.hero.imageAlt': 'Подготовка к TOEFL в Upstream',
    'toefl.section1.title': 'Что такое TOEFL?',
    'toefl.section1.subtitle': 'TOEFL iBT — международный экзамен по английскому языку, который принимают университеты и колледжи по всему миру для оценки готовности к обучению на английском.',
    'toefl.info1.title': 'Reading & Listening',
    'toefl.info1.text': 'Работа с академическими текстами и лекциями — понимание деталей и общей идеи.',
    'toefl.info2.title': 'Writing',
    'toefl.info2.text': 'Структурированные эссе на основе прочитанного и услышанного материала.',
    'toefl.info3.title': 'Speaking',
    'toefl.info3.text': 'Короткие устные ответы по заданному формату с чёткой структурой.',
    'toefl.section2.title': 'TOEFL или IELTS: в чём разница',
    'toefl.section2.subtitle': 'Оба экзамена оценивают владение английским языком, но отличаются форматом и подходом.',
    'toefl.compare1.title': 'Формат экзамена',
    'toefl.compare1.text': 'TOEFL полностью проходит на компьютере, включая устную часть — она записывается, а не проговаривается собеседнику.',
    'toefl.compare2.title': 'Стиль языка',
    'toefl.compare2.text': 'TOEFL чаще ориентирован на американский академический английский, IELTS — на британский вариант.',
    'toefl.compare3.title': 'Что выбрать',
    'toefl.compare3.text': 'Выбор зависит от требований конкретного университета — мы помогаем определиться и подготовиться к нужному формату.',
    'toefl.universities.title': 'Где принимают TOEFL',
    'toefl.universities.subtitle': 'TOEFL признают тысячи университетов по всему миру. Требования отличаются, поэтому уточняйте условия у выбранного вуза.',
    'toefl.university1.title': '🇺🇸 США',
    'toefl.university1.text': 'TOEFL — один из самых распространённых экзаменов при поступлении в американские университеты.',
    'toefl.university2.title': '🇨🇦 Канада',
    'toefl.university2.text': 'Многие канадские вузы принимают TOEFL наравне с другими языковыми сертификатами.',
    'toefl.university3.title': '🇪🇺 Европа',
    'toefl.university3.text': 'Программы на английском языке в Европе часто указывают TOEFL как один из принимаемых сертификатов.',
    'toefl.university4.title': '🌍 Другие регионы',
    'toefl.university4.text': 'Университеты Азии, Австралии и Ближнего Востока также нередко признают результаты TOEFL.',
    'toefl.section3.title': 'Почему сдают TOEFL',
    'toefl.section3.subtitle': 'Помимо поступления, TOEFL часто нужен для виз, стипендий и программ обмена.',
    'toefl.benefit1.title': 'Поступление в вуз',
    'toefl.benefit1.text': 'Подтверждает уровень английского для обучения на англоязычной программе.',
    'toefl.benefit2.title': 'Стипендии и гранты',
    'toefl.benefit2.text': 'Часто входит в список требований для стипендиальных и обменных программ.',
    'toefl.benefit3.title': 'Личный рост',
    'toefl.benefit3.text': 'Подготовка развивает практичные навыки английского для учёбы и жизни за границей.',
    'toefl.final.title': 'Готовы начать подготовку к TOEFL?',
    'toefl.final.text': 'Запишитесь на консультацию — определим ваш уровень и подберём формат подготовки.',
    'toefl.final.button': 'Получить консультацию',
    'toefl.footer.note': 'Ваш английский для учёбы за границей.',

    'summerCamp.hero.badge': 'SUMMER CAMP IN ALMATY',
    'summerCamp.hero.title': 'Летний лагерь Upstream Universe',
    'summerCamp.hero.text': 'Английский язык каждый день, новые друзья, игры и приключения — незабываемое лето для детей и подростков в Алматы.',
    'summerCamp.highlight1.title': 'Английский каждый день',
    'summerCamp.highlight1.text': 'Практика в живой, увлекательной форме',
    'summerCamp.highlight2.title': 'Активности и игры',
    'summerCamp.highlight2.text': 'Спорт, творчество и командные проекты',
    'summerCamp.highlight3.title': 'Международная атмосфера',
    'summerCamp.highlight3.text': 'Новые друзья и яркие впечатления',
    'summerCamp.cta1': 'Записаться в лагерь',
    'summerCamp.cta2': 'Летние программы за границей',
    'summerCamp.hero.imageAlt': 'Летний лагерь Upstream Universe',
    'summerCamp.section1.eyebrow': 'Лето в Upstream Universe',
    'summerCamp.section1.title': 'Каждый день — новая история',
    'summerCamp.section1.text': 'Наш летний лагерь сочетает изучение английского языка с активными играми, творчеством и командными проектами. Дети растут, общаются и заводят друзей в дружелюбной, безопасной атмосфере.',
    'summerCamp.program.language.title': '🗣️ Языковое погружение',
    'summerCamp.program.language.li1': 'Английский язык каждый день в игровой форме',
    'summerCamp.program.language.li2': 'Интерактивные занятия и разговорные клубы',
    'summerCamp.program.language.li3': 'Практика с носителями языковой среды',
    'summerCamp.program.team.title': '🏆 Команда и спорт',
    'summerCamp.program.team.li1': 'Командные проекты и совместные задания',
    'summerCamp.program.team.li2': 'Спортивные активности на свежем воздухе',
    'summerCamp.program.team.li3': 'Развитие лидерства и умения работать в группе',
    'summerCamp.program.creative.title': '🎨 Творчество и игры',
    'summerCamp.program.creative.li1': 'Творческие мастер-классы и рукоделие',
    'summerCamp.program.creative.li2': 'Настольные и активные игры',
    'summerCamp.program.creative.li3': 'Пространство для самовыражения и фантазии',
    'summerCamp.program.events.title': '🎉 Особые события',
    'summerCamp.program.events.li1': 'Пенная вечеринка и тематические дни',
    'summerCamp.program.events.li2': 'Приключения на свежем воздухе',
    'summerCamp.program.events.li3': 'Международная, дружелюбная атмосфера',
    'summerCamp.gallery.title': 'Атмосфера нашего лагеря',
    'summerCamp.gallery.subtitle': 'Живые эмоции, новые друзья и незабываемые моменты каждый день.',
    'summerCamp.gallery.alt1': 'Летний лагерь Upstream Universe — фото 1',
    'summerCamp.gallery.alt2': 'Летний лагерь Upstream Universe — фото 2',
    'summerCamp.cta.title': 'Запишите ребёнка в летний лагерь',
    'summerCamp.cta.text': 'Подарите этому лету настоящие впечатления: английский язык, новые друзья и активности каждый день в Upstream Universe.',
    'summerCamp.cta.button': 'Записаться сейчас',
    'summerCamp.footer.note': 'Незабываемое лето с английским языком в Алматы.',

    'language.switcher.ru': '🇷🇺 Русский',
    'language.switcher.en': '🇬🇧 English',
  },
  en: {
    'meta.home.title': 'Upstream — Education Center, Almaty',
    'meta.ielts.title': 'IELTS — Upstream Universe',
    'meta.summer.title': 'Summer Programs — Upstream Universe',
    'meta.english.title': 'Conversational English — Upstream',
    'meta.ait.title': 'AIT — Upstream Universe',
    'meta.sat.title': 'SAT — Upstream Universe',
    'meta.toefl.title': 'TOEFL — Upstream Universe',
    'meta.summerCamp.title': 'Summer Camp — Upstream Universe',

    'header.home': 'Home',
    'header.courses': 'Courses',
    'header.ielts': 'IELTS',
    'header.summer': 'Summer Abroad ✈️',
    'header.summerCamp': 'Summer Camp 🏕️',
    'header.english': 'English',
    'header.whatsapp': 'WhatsApp',
    'header.instagram': 'Instagram',
    'header.reviews': 'Reviews',
    'header.contacts': 'Contacts',
    'header.langButton': 'RU | EN',
    'header.logoAlt': 'Upstream logo',
    'header.navAria': 'Main navigation',
    'header.burgerMenuAria': 'Open menu',
    'header.languageButtonAria': 'Choose language',

    'hero.titleHtml': 'English | <span class="hero-title-highlight">IELTS</span> | Math<br>Kazakh Language | <span class="hero-title-highlight">SAT</span> | TOEFL | AIT',
    'hero.text': 'An international education center helping students master English, achieve top exam scores and gain admission to leading universities worldwide.',
    'hero.highlight1.title': '250+',
    'hero.highlight1.text': 'students',
    'hero.highlight2.title': 'IELTS 7.5',
    'hero.highlight2.text': 'average score',
    'hero.highlight3.title': '10+',
    'hero.highlight3.text': 'years',
    'hero.cta1': 'Get Consultation',
    'hero.cta1Href': 'https://wa.me/77055844467?text=Hello!%20I%20would%20like%20to%20get%20a%20consultation',
    'hero.cta2': 'Explore Courses',
    'hero.panelText': 'Upstream Almaty — 10 years building the foundation for students’ success',
    'hero.imageAlt': 'Upstream team',
    'hero.campImageAlt': 'Upstream summer camp',
    'hero.mapImageAlt': 'Upstream location on the map',

    'services.title': 'Our Courses',
    'services.subtitle': 'Clear and effective programs: from exam prep to creative development.',

    'course.english.title': 'English',
    'course.english.desc': 'Live practice, confident speaking, and grammar made simple.',
    'course.english.cta': 'Learn more',
    'course.english.imageAlt': 'English course',
    'course.ielts.title': 'IELTS Preparation',
    'course.ielts.desc': 'Strategy, module practice, and live sessions with native speakers.',
    'course.ielts.cta': 'More about IELTS',
    'course.ielts.imageAlt': 'IELTS preparation',
    'course.summer.title': 'Summer Abroad',
    'course.summer.desc': 'English abroad, new cultures, and an unforgettable international experience.',
    'course.summer.cta': 'Learn more',
    'course.summer.imageAlt': 'Summer program abroad',
    'course.ait.title': 'AIT – Admission Insights Test',
    'course.ait.desc': 'Analytical thinking, essays, and strategy for confident admissions.',
    'course.ait.cta': 'Learn more',
    'course.ait.imageAlt': 'AIT preparation',
    'course.ait.whatsappHref': 'https://wa.me/77055844467?text=Hello!%20I%20want%20to%20learn%20more%20about%20AIT',
    'course.sat.title': 'SAT Preparation',
    'course.sat.desc': 'Advanced math, reading, and writing for US university admissions.',
    'course.sat.cta': 'Learn more',
    'course.sat.imageAlt': 'SAT preparation',
    'course.sat.whatsappHref': 'https://wa.me/77055844467?text=Hello!%20I%20want%20to%20learn%20more%20about%20SAT',
    'course.toefl.title': 'TOEFL Preparation',
    'course.toefl.desc': 'Full exam coverage with experienced teacher-led practice.',
    'course.toefl.cta': 'Learn more',
    'course.toefl.imageAlt': 'TOEFL preparation',
    'course.toefl.whatsappHref': 'https://wa.me/77055844467?text=Hello!%20I%20want%20to%20learn%20more%20about%20TOEFL',
    'course.summerCamp.title': 'Summer Camp',
    'course.summerCamp.desc': 'A summer camp in Almaty: daily English practice, games, sports, and creative workshops.',
    'course.summerCamp.cta': 'Learn more',
    'course.summerCamp.imageAlt': 'Upstream summer camp',

    'promo.badge': 'SUMMER ABROAD',
    'promo.title': 'Study English Abroad This Summer with Upstream Universe',
    'promo.text': 'Spend your summer learning English in inspiring international destinations while exploring new cultures, building confidence, and enjoying a premium educational experience.',
    'promo.button': 'Learn more',
    'promo.h1.title': 'USA, UK, Europe',
    'promo.h1.text': 'Curated international summer destinations',
    'promo.h2.title': 'Native Speakers',
    'promo.h2.text': 'Immersive English and communication practice',
    'promo.h3.title': 'Full Support',
    'promo.h3.text': 'Flights, accommodation, meals and guidance',

    'camp.title': 'Summer Camp 2026',
    'camp.text': 'A vibrant summer for kids that uncovers talent, builds confidence, and fills the season with productive activity. Every day includes active games, creative lessons, English in real life, and social connection.',
    'camp.item1': 'bright activities and new friendships',
    'camp.item2': 'English growth and communication skills',
    'camp.item3': 'creativity, movement, and self-confidence',
    'camp.note': 'Sign up and details in WhatsApp: <a href="https://wa.me/77055844467">+7 (705) 584-44-67</a>',
    'camp.learnMore': 'Learn More',

    'location.title': 'Location',
    'location.address': 'Sagdiyeva street, 78, Almaty',
    'location.hours': 'Mon–Fri 09:00–17:00',
    'location.phone': 'WhatsApp: +7 (705) 584-44-67',
    'location.note': '28 min from city center • Many bus routes • Parking available',
    'location.mapBadge': 'Open in 2GIS',
    'location.mapLink': 'Open route in 2GIS',
    'location.mapTitle': 'Upstream Universe',
    'location.mapSubtitle': 'Almaty, Sagdiyeva str., 78',
    'location.mapButton': 'Open map',

    'reviews.title': 'Reviews',
    'reviews.note': 'More reviews on Instagram: <a href="https://instagram.com/upstream.almaty" target="_blank">@upstream.almaty</a>',
    'reviews.quote1': '"Our IELTS teacher helped us pass the exam with the best possible result for us — thank you for the structured approach and regular feedback."',
    'reviews.name1': '— Daniyar, student',
    'reviews.quote2': '"Math finally makes sense: tasks are broken down step by step, and my child started getting top marks on tests."',
    'reviews.name2': '— Aizhan, parent',
    'reviews.quote3': '"Summer camp was the perfect mix of learning and activities. The kids came back inspired and with new friends."',
    'reviews.name3': '— Yerlan, parent',
    'reviews.avatar1Alt': 'Student avatar',
    'reviews.avatar2Alt': 'Parent avatar',
    'reviews.avatar3Alt': 'Camp participant avatar',
    'reviews.quote4': '"Excellent SAT prep — our son strengthened his math skills and confidently passed the exam with a high score."',
    'reviews.name4': '— Marat, parent',
    'reviews.quote5': '"After three months our daughter started speaking English freely — huge progress thanks to the live practice in class."',
    'reviews.name5': '— Gulnara, parent',

    'footer.address': 'Sagdiyeva street, 78, Almaty',
    'footer.note': 'Exam prep, creative courses, and live lessons in an atmosphere of confident growth.',
    'footer.contactTitle': 'Contact us',
    'footer.whatsapp': 'WhatsApp',
    'footer.whatsappHref': 'https://wa.me/77055844467?text=Hello!%20I%20want%20to%20contact%20Upstream',
    'footer.instagram': 'Instagram',
    'footer.2gis': '2GIS',

    'summer.hero.badge': 'SUMMER LANGUAGE PROGRAMS',
    'summer.hero.title': 'Summer programs abroad from Upstream Universe',
    'summer.hero.text': 'Spend your summer learning English in a global environment, discovering new cities, and receiving support every step of the way.',
    'summer.highlight1.title': '10+ countries',
    'summer.highlight1.text': 'Top summer destinations',
    'summer.highlight2.title': 'Immersion',
    'summer.highlight2.text': 'English in real life',
    'summer.highlight3.title': 'Full support',
    'summer.highlight3.text': 'Flights, accommodation, visa, and guidance',
    'summer.cta1': 'Apply for Summer Program',
    'summer.cta2': 'English',
    'summer.section1.eyebrow': 'Global Summer Experience',
    'summer.section1.title': 'Travel and learn English this summer.',
    'summer.section1.text': 'Our programs combine quality language lessons with travel, cultural immersion, and support every step of the way. Learn, connect, and grow in the world’s best cities.',
    'summer.destination1.title': 'USA',
    'summer.destination1.text': 'Modern campuses, international communities, and a strong English-speaking environment.',
    'summer.destination2.title': 'United Kingdom',
    'summer.destination2.text': 'A classic academic atmosphere with rich cultural immersion and language development.',
    'summer.destination3.title': 'Germany',
    'summer.destination3.text': 'Perfect for students who want a structured, inspiring, and highly organized experience.',
    'summer.destination4.title': 'France',
    'summer.destination4.text': 'A blend of language learning, art, design, and a distinctive European lifestyle.',
    'summer.destination5.title': 'Czech Republic',
    'summer.destination5.text': 'Flexible and vibrant, giving students a welcoming route into international study.',
    'summer.destination6.title': 'The Netherlands',
    'summer.destination6.text': 'Contemporary, diverse, and ideal for students looking for a modern educational journey.',
    'summer.section2.eyebrow': 'Destinations',
    'summer.section2.title': 'Choose a destination for your summer experience.',
    'summer.section2.text': 'Students can visit the USA, UK, Germany, France, Czech Republic, and the Netherlands while improving their English and enjoying cultural immersion.',
    'summer.section3.eyebrow': 'What is included',
    'summer.section3.title': 'Everything you need for a comfortable and memorable summer.',
    'summer.include.flights': 'Flights',
    'summer.include.flights.text': 'Return tickets arranged with comfort and care.',
    'summer.include.accommodation': 'Accommodation',
    'summer.include.accommodation.text': 'Safe and comfortable housing in student-friendly areas.',
    'summer.include.meals': 'Meals',
    'summer.include.meals.text': 'Balanced nutrition designed to support focused study.',
    'summer.include.classes': 'English classes',
    'summer.include.classes.text': 'Structured lessons with real communication and confidence-building.',
    'summer.include.speakers': 'Native speakers',
    'summer.include.speakers.text': 'Live practice with professionals and fluent tutors.',
    'summer.include.visa': 'Visa support',
    'summer.include.visa.text': 'Guidance and documentation support for the application process.',
    'summer.include.insurance': 'Medical insurance',
    'summer.include.insurance.text': 'Coverage for wellness and peace of mind throughout the journey.',
    'summer.include.transfers': 'Airport transfers',
    'summer.include.transfers.text': 'Safe pickup and transfer services from the airport to accommodation.',
    'summer.include.support': '24/7 support',
    'summer.include.support.text': 'Round-the-clock support for students and families during the trip.',
    'summer.include.certificate': 'Certificate of completion',
    'summer.include.certificate.text': 'A formal recognition of progress and participation.',
    'summer.cta.title': 'Apply for Summer Program',
    'summer.cta.text': 'Let your summer become a turning point. Join Upstream Universe and experience English, travel, and growth in one elegant international program.',
    'summer.cta.button': 'Start your application',
    'summer.footer.note': 'Premium English learning and international summer programs designed for growth, confidence, and unforgettable experiences.',

    'english.hero.badge': 'CONVERSATIONAL ENGLISH',
    'english.hero.title': 'Speak freely — without fear or heavy grammar',
    'english.hero.text': 'Our approach is live speech: dialogues, projects, and practice in real situations. Lessons are built so you speak more and gain confidence fast.',
    'english.hero.imageAlt': 'Conversational English',
    'english.program.adults.title': 'For adults',
    'english.program.adults.li1': 'Speaking practice and communication skills',
    'english.program.adults.li2': 'IELTS and academic direction',
    'english.program.adults.li3': 'Evening and individual formats',
    'english.program.school.title': 'For school students',
    'english.program.school.li1': 'Stronger grades and confident speech',
    'english.program.school.li2': 'Preparation for exams and tests',
    'english.program.school.li3': 'Project-based and group work',
    'english.program.children.title': 'For children',
    'english.program.children.li1': 'Games and lessons for first words',
    'english.program.children.li2': 'Small groups for confidence',
    'english.program.children.li3': 'Clubs and creative activities',
    'english.program.ielts.title': 'IELTS',
    'english.program.ielts.li1': 'Targeted module training',
    'english.program.ielts.li2': 'Exam simulations and feedback',
    'english.program.ielts.li3': 'A personal plan to reach the required score',
    'english.programs.title': 'Programs for every age',
    'english.programs.subtitle': 'From first words to business English — we will find the right format for you.',
    'english.program.teenagers.title': 'For teenagers',
    'english.program.teenagers.li1': 'Stronger grades and confident speech',
    'english.program.teenagers.li2': 'Preparation for exams and tests',
    'english.program.teenagers.li3': 'Project-based and group work',
    'english.program.corporate.title': 'Corporate English',
    'english.program.corporate.li1': 'Business correspondence and negotiations',
    'english.program.corporate.li2': 'Group programs for teams and companies',
    'english.program.corporate.li3': 'Flexible schedule around work tasks',
    'english.hero.highlight1.title': '70% practice',
    'english.hero.highlight1.text': 'we speak and use the language',
    'english.hero.highlight2.title': 'Chat Support',
    'english.hero.highlight2.text': 'questions and help between lessons',
    'english.hero.highlight3.title': 'Native & experienced teachers',
    'english.hero.highlight3.text': 'a real model of speech',
    'english.hero.cta': 'Sign up',
    'english.pageTitle': 'Conversational English — Upstream',
    'english.section1.title': 'What is conversational English?',
    'english.section1.subtitle': 'This format focuses on the ability to express ideas and communicate easily. We build lessons around speaking so language does not remain only on paper.',
    'english.section1.note': 'Learning with us combines live practice and supportive guidance. We do not teach by rote, but by preparing for real conversations inside class, in chat, and beyond.',
    'english.info1.title': 'Simple and clear',
    'english.info1.text': 'We explain grammar through examples, not long rules.',
    'english.info2.title': 'Real themes',
    'english.info2.text': 'We talk about school, hobbies, travel and exam prep — things that matter right away.',
    'english.info3.title': 'Confidence building',
    'english.info3.text': 'Each lesson reduces speaking anxiety and increases your pace.',
    'english.section2.title': 'How chat and support work',
    'english.section2.subtitle': 'Chat gives quick access to homework, explanations, and feedback. We use it as part of the course so progress never stops.',
    'english.info4.title': 'Real-time answers',
    'english.info4.text': 'Questions about homework, pronunciation or vocabulary are solved quickly in chat.',
    'english.info5.title': 'Between-lesson support',
    'english.info5.text': 'You receive materials, prompts, and motivation even after class.',
    'english.info6.title': 'Group attention',
    'english.info6.text': 'Chat helps you feel the team — students share wins while the teacher tracks progress.',
    'english.final.title': 'Ready to start speaking?',
    'english.final.text': 'Book a trial lesson — we will assess your level, select the right group and show how to quickly bring language into daily practice.',
    'english.final.button': 'Book a trial lesson',
    'english.footer.note': 'Your path to confidence and fluent communication in English.',

    'ielts.hero.badge': 'IELTS PROGRAM',
    'ielts.hero.title': 'IELTS — the key to international education and opportunity',
    'ielts.hero.text': 'We do not sell English. We offer future opportunities, confidence, and a path to studying abroad.',
    'ielts.hero.imageAlt': 'IELTS training in the Upstream office',
    'ielts.result1.label': 'Verified result',
    'ielts.result2.label': 'Verified result',
    'ielts.result3.label': 'Verified result',
    'ielts.result4.label': 'Verified result',
    'ielts.result1.alt': 'IELTS result 1',
    'ielts.result2.alt': 'IELTS result 2',
    'ielts.result3.alt': 'IELTS result 3',
    'ielts.result4.alt': 'IELTS result 4',
    'ielts.result1.aria': 'Open IELTS result 1',
    'ielts.result2.aria': 'Open IELTS result 2',
    'ielts.result3.aria': 'Open IELTS result 3',
    'ielts.result4.aria': 'Open IELTS result 4',
    'ielts.lightbox.close': 'Close gallery',
    'ielts.lightbox.previous': 'Previous image',
    'ielts.lightbox.next': 'Next image',
    'ielts.lightbox.alt': 'IELTS result preview',
    'ielts.hero.highlight1.title': 'Readiness',
    'ielts.hero.highlight1.text': 'for the exam in 3 months',
    'ielts.hero.highlight2.title': 'Teachers',
    'ielts.hero.highlight2.text': 'with IELTS experience and native speakers',
    'ielts.hero.highlight3.title': 'Focus',
    'ielts.hero.highlight3.text': 'on real English communication',
    'ielts.hero.cta': 'Sign up',
    'ielts.eyebrow.why': 'Why IELTS?',
    'ielts.eyebrow.benefits': 'Benefits',
    'ielts.eyebrow.preparation': 'Preparation at Upstream',
    'ielts.section1.title': 'What is IELTS?',
    'ielts.section1.subtitle': 'IELTS is a global English test showing that you understand, speak, and think in the language in real academic and professional situations.',
    'ielts.section1.note': 'It is not just a test — it is a standard accepted by universities, employers, and government programs worldwide.',
    'ielts.info1.title': 'Academic and General',
    'ielts.info1.text': 'Academic is for university study, General is for work, migration, and professional programs.',
    'ielts.info2.title': 'Clear criteria',
    'ielts.info2.text': 'Your score is based on reading, writing, listening, and speaking — all measured on a single 0–9 scale.',
    'ielts.info3.title': 'International recognition',
    'ielts.info3.text': 'IELTS is accepted in the USA, UK, Canada, Australia, and hundreds of universities and employers worldwide.',
    'ielts.section2.title': 'Why IELTS?',
    'ielts.section2.subtitle': 'It is a respected proof of your English level for study, internships, and an international career.',
    'ielts.section2.note': 'The IELTS certificate works as your professional passport: it shows you are ready to study and work in English where it matters most.',
    'ielts.benefit1.title': 'Admission to top universities',
    'ielts.benefit1.text': 'IELTS scores make your application stronger before the admissions committee.',
    'ielts.benefit2.title': 'Work abroad',
    'ielts.benefit2.text': 'IELTS confirms your readiness to work in an international company and helps pass a language interview.',
    'ielts.benefit3.title': 'Confidence for the future',
    'ielts.benefit3.text': 'You do not just take the exam — you gain a tool that lasts for years and widens your opportunities.',
    'ielts.section3.title': 'Our instructors',
    'ielts.section3.subtitle': 'The team includes experienced IELTS mentors and native speakers who help you not just prepare for the exam, but speak confidently in every situation.',
    'ielts.teacher1.title': 'Native speakers',
    'ielts.teacher1.text': 'Regular practice with natives helps you adapt to natural speech and understand live English intonation.',
    'ielts.teacher2.title': 'Exam practice',
    'ielts.teacher2.text': 'Each topic is explored through real IELTS cases: essays, listening, and speaking.',
    'ielts.teacher3.title': 'Individual route',
    'ielts.teacher3.text': 'We begin with diagnostics, then create a plan to your target score — not by guesswork but by your progress pace.',
    'ielts.results.title': 'Our Students’ IELTS Results',
    'ielts.results.subtitle': 'Real achievements. Real success stories.',
    'ielts.results.text': 'Students across our programs reach strong IELTS outcomes through focused preparation, personalized feedback, and consistent practice.',
    'ielts.stats1.title': '250+ Students',
    'ielts.stats1.text': 'guided to confident IELTS results',
    'ielts.stats2.title': 'Average Band 7.0+',
    'ielts.stats2.text': 'across our most committed learners',
    'ielts.stats3.title': 'Native Speakers',
    'ielts.stats3.text': 'for real conversation and exam readiness',
    'ielts.stats4.title': '4.9 Rating',
    'ielts.stats4.text': 'from student feedback and outcomes',
    'ielts.final.title': 'Why start now?',
    'ielts.final.text': 'The earlier you start, the faster you get confidence, the right score, and the ability to choose the best programs and jobs. Preparation time is your future advantage.',
    'ielts.final.li1': 'Reduce exam stress',
    'ielts.final.li2': 'Build a habit of speaking English daily',
    'ielts.final.li3': 'A plan that leads to your target score',
    'ielts.final.button': 'Get a consultation',
    'ielts.footer.note': 'Your path to IELTS, future, and international opportunities.',

    'ielts.topuni.eyebrow': 'Top Universities',
    'ielts.where.title': 'Where can IELTS help you?',
    'ielts.where.subtitle': 'A strong IELTS score opens up more options for admission to leading Kazakhstani universities.',
    'ielts.where.imageAlt': 'Nazarbayev University',
    'ielts.where.card1.title': 'Nazarbayev University',
    'ielts.where.card1.text': 'IELTS is among the certificates considered for admission to Nazarbayev University.',
    'ielts.where.card2.title': 'Top Kazakhstani universities',
    'ielts.where.card2.text': 'Many Kazakhstani universities recognize IELTS and consider it for admission to English-taught programs.',
    'ielts.where.note': 'Please note: under current admissions rules, a strong IELTS score may add up to 50 UNT points at certain Kazakhstani universities. Always confirm exact conditions with your chosen university’s admissions office — IELTS does not guarantee admission, but it strengthens your application.',
    'ielts.abroad.eyebrow': 'Study Abroad',
    'ielts.abroad.title': 'Studying abroad with IELTS',
    'ielts.abroad.subtitle': 'IELTS is accepted by thousands of universities worldwide — here are the main regions where it matters most.',
    'ielts.abroad.country1.title': '🇺🇸 USA',
    'ielts.abroad.country1.text': 'Thousands of American colleges and universities accept IELTS alongside TOEFL.',
    'ielts.abroad.country2.title': '🇬🇧 United Kingdom',
    'ielts.abroad.country2.text': 'IELTS is the primary language test for admission to British universities.',
    'ielts.abroad.country3.title': '🇨🇦 Canada',
    'ielts.abroad.country3.text': 'Canadian universities widely recognize IELTS for admitting international students.',
    'ielts.abroad.country4.title': '🇦🇺 Australia',
    'ielts.abroad.country4.text': 'IELTS is a standard requirement for visas and admission to Australian universities.',
    'ielts.abroad.country5.title': '🇪🇺 Europe',
    'ielts.abroad.country5.text': 'Many English-taught programs in Europe accept IELTS as proof of language level.',

    'ait.hero.badge': 'AIT PROGRAM',
    'ait.hero.title': 'AIT — confident preparation for your admission test',
    'ait.hero.text': 'The Admission Insights Test evaluates analytical thinking, essay writing, and logic — we help students take it calmly and effectively.',
    'ait.hero.highlight1.title': 'Format breakdown',
    'ait.hero.highlight1.text': 'test structure and question types',
    'ait.hero.highlight2.title': 'Essay practice',
    'ait.hero.highlight2.text': 'argumentation and writing structure',
    'ait.hero.highlight3.title': 'Personal plan',
    'ait.hero.highlight3.text': 'preparation tailored to your timeline and goal',
    'ait.hero.cta': 'Sign up',
    'ait.hero.imageAlt': 'AIT preparation at Upstream',
    'ait.section1.title': 'What is AIT?',
    'ait.section1.subtitle': 'AIT (Admission Insights Test) is an admission test used by universities and colleges to assess a candidate’s readiness to study in English.',
    'ait.section1.note': 'The test does not check memorized facts — it measures your ability to analyze text, build arguments, and write a structured essay, skills that matter throughout your studies.',
    'ait.info1.title': 'Analytical thinking',
    'ait.info1.text': 'Logic and information-processing tasks show how you solve non-standard problems.',
    'ait.info2.title': 'Essay and writing',
    'ait.info2.text': 'You need to present your position clearly and logically — we teach this step by step.',
    'ait.info3.title': 'Reading comprehension',
    'ait.info3.text': 'Working with academic texts of varying difficulty prepares you for real academic workload.',
    'ait.section2.title': 'Who needs AIT and why it matters',
    'ait.section2.subtitle': 'AIT suits school students and applicants planning to join English-taught programs.',
    'ait.benefit1.title': 'For university applicants',
    'ait.benefit1.text': 'Test results are often part of the application package for English-taught programs.',
    'ait.benefit2.title': 'For exam confidence',
    'ait.benefit2.text': 'A familiar format and practice reduce stress and help you show your real level.',
    'ait.benefit3.title': 'For sharper thinking',
    'ait.benefit3.text': 'AIT prep builds analytical skills that help both at university and beyond.',
    'ait.section3.title': 'How our teachers prepare you for AIT',
    'ait.section3.subtitle': 'We start with diagnostics and build the program around your strengths and weaknesses — no unnecessary theory.',
    'ait.teacher1.title': 'Level diagnostics',
    'ait.teacher1.text': 'A practice test shows what to focus on first.',
    'ait.teacher2.title': 'Practice with real tasks',
    'ait.teacher2.text': 'We work through sample questions and practice managing exam time.',
    'ait.teacher3.title': 'Essay feedback',
    'ait.teacher3.text': 'Every essay is reviewed individually: structure, arguments, language.',
    'ait.final.title': 'Ready to start preparing for AIT?',
    'ait.final.text': 'Book a consultation — we will assess your level and build a clear preparation plan.',
    'ait.final.button': 'Get a consultation',
    'ait.footer.note': 'Your path to confident university admission.',

    'sat.hero.badge': 'SAT PREPARATION',
    'sat.hero.title': 'SAT — the foundation for admission to universities abroad',
    'sat.hero.text': 'We prepare you for SAT Math and the Reading & Writing section — systematically, with real practice tests and error analysis.',
    'sat.hero.highlight1.title': 'Math',
    'sat.hero.highlight1.text': 'from basics to advanced problems',
    'sat.hero.highlight2.title': 'Reading & Writing',
    'sat.hero.highlight2.text': 'working with text and grammar',
    'sat.hero.highlight3.title': 'Practice tests',
    'sat.hero.highlight3.text': 'real exam format and timing',
    'sat.hero.cta': 'Sign up',
    'sat.hero.imageAlt': 'SAT preparation at Upstream',
    'sat.section1.title': 'What is SAT?',
    'sat.section1.subtitle': 'The SAT (Scholastic Assessment Test) is a standardized exam often used by US colleges and universities when reviewing applications.',
    'sat.info1.title': 'Math',
    'sat.info1.text': 'Algebra, geometry, and data analysis — with a focus on speed and accuracy.',
    'sat.info2.title': 'Reading & text analysis',
    'sat.info2.text': 'Working with fiction and non-fiction texts, finding the main idea and arguments.',
    'sat.info3.title': 'Writing & grammar',
    'sat.info3.text': 'Language rules and text editing under time pressure.',
    'sat.section2.title': 'Why take the SAT',
    'sat.section2.subtitle': 'A strong SAT score strengthens your application and opens more options for studying abroad.',
    'sat.benefit1.title': 'For admission abroad',
    'sat.benefit1.text': 'Many universities consider SAT as part of an applicant’s overall documents.',
    'sat.benefit2.title': 'For scholarships',
    'sat.benefit2.text': 'A high score can improve your chances for certain scholarship programs.',
    'sat.benefit3.title': 'For self-confidence',
    'sat.benefit3.text': 'Structured preparation reduces exam anxiety and teaches time management.',
    'sat.universities.title': 'Where SAT scores are considered',
    'sat.universities.subtitle': 'Requirements vary by university — always check current admissions rules. Below are general regional guidelines.',
    'sat.university1.title': '🇺🇸 USA',
    'sat.university1.text': 'Many American colleges and universities accept SAT as part of an application.',
    'sat.university2.title': '🇬🇧 United Kingdom',
    'sat.university2.text': 'Some programs consider SAT alongside other international qualifications.',
    'sat.university3.title': '🇨🇦 Canada',
    'sat.university3.text': 'Certain Canadian universities accept SAT for international applicants.',
    'sat.university4.title': '🇪🇺 Europe',
    'sat.university4.text': 'Select international programs in Europe also consider SAT scores.',
    'sat.section3.title': 'How we prepare you for SAT',
    'sat.section3.subtitle': 'The program is built around practice tests, error analysis, and gradual score improvement.',
    'sat.teacher1.title': 'Initial diagnostics',
    'sat.teacher1.text': 'We determine your starting level in each section of the exam.',
    'sat.teacher2.title': 'Regular practice tests',
    'sat.teacher2.text': 'We track progress and adjust the preparation plan.',
    'sat.teacher3.title': 'Error analysis',
    'sat.teacher3.text': 'Every mistake becomes a growth point — we review it until fully understood.',
    'sat.final.title': 'Ready to start SAT preparation?',
    'sat.final.text': 'Book a consultation — we will assess your level and choose the right pace.',
    'sat.final.button': 'Get a consultation',
    'sat.footer.note': 'Your path to admission at a university abroad.',

    'toefl.hero.badge': 'TOEFL PREPARATION',
    'toefl.hero.title': 'TOEFL — English for studying abroad',
    'toefl.hero.text': 'We prepare you for all sections of TOEFL iBT: reading, listening, writing, and speaking — with a focus on academic English.',
    'toefl.hero.highlight1.title': '4 sections',
    'toefl.hero.highlight1.text': 'Reading, Listening, Writing, Speaking',
    'toefl.hero.highlight2.title': 'Academic English',
    'toefl.hero.highlight2.text': 'vocabulary and style of university texts',
    'toefl.hero.highlight3.title': 'Speaking practice',
    'toefl.hero.highlight3.text': 'regular speaking tasks with feedback',
    'toefl.hero.cta': 'Sign up',
    'toefl.hero.imageAlt': 'TOEFL preparation at Upstream',
    'toefl.section1.title': 'What is TOEFL?',
    'toefl.section1.subtitle': 'TOEFL iBT is an international English exam accepted by universities and colleges worldwide to assess readiness to study in English.',
    'toefl.info1.title': 'Reading & Listening',
    'toefl.info1.text': 'Working with academic texts and lectures — understanding detail and main ideas.',
    'toefl.info2.title': 'Writing',
    'toefl.info2.text': 'Structured essays based on reading and listening material.',
    'toefl.info3.title': 'Speaking',
    'toefl.info3.text': 'Short spoken responses in a set format with clear structure.',
    'toefl.section2.title': 'TOEFL vs IELTS: what’s the difference',
    'toefl.section2.subtitle': 'Both exams assess English proficiency but differ in format and approach.',
    'toefl.compare1.title': 'Exam format',
    'toefl.compare1.text': 'TOEFL is fully computer-based, including the speaking section, which is recorded rather than spoken to a person.',
    'toefl.compare2.title': 'Language style',
    'toefl.compare2.text': 'TOEFL leans toward American academic English, while IELTS leans toward British English.',
    'toefl.compare3.title': 'Which to choose',
    'toefl.compare3.text': 'The choice depends on your target university’s requirements — we help you decide and prepare for the right format.',
    'toefl.universities.title': 'Where TOEFL is accepted',
    'toefl.universities.subtitle': 'Thousands of universities worldwide recognize TOEFL. Requirements vary, so check with your chosen university.',
    'toefl.university1.title': '🇺🇸 USA',
    'toefl.university1.text': 'TOEFL is one of the most widely accepted exams for admission to American universities.',
    'toefl.university2.title': '🇨🇦 Canada',
    'toefl.university2.text': 'Many Canadian universities accept TOEFL alongside other language certificates.',
    'toefl.university3.title': '🇪🇺 Europe',
    'toefl.university3.text': 'English-taught programs in Europe often list TOEFL as an accepted certificate.',
    'toefl.university4.title': '🌍 Other regions',
    'toefl.university4.text': 'Universities in Asia, Australia, and the Middle East frequently recognize TOEFL as well.',
    'toefl.section3.title': 'Why take TOEFL',
    'toefl.section3.subtitle': 'Besides admission, TOEFL is often required for visas, scholarships, and exchange programs.',
    'toefl.benefit1.title': 'University admission',
    'toefl.benefit1.text': 'Confirms your English level for studying in an English-taught program.',
    'toefl.benefit2.title': 'Scholarships & grants',
    'toefl.benefit2.text': 'Often part of the requirements for scholarship and exchange programs.',
    'toefl.benefit3.title': 'Personal growth',
    'toefl.benefit3.text': 'Preparation builds practical English skills for studying and living abroad.',
    'toefl.final.title': 'Ready to start TOEFL preparation?',
    'toefl.final.text': 'Book a consultation — we will assess your level and choose the right format.',
    'toefl.final.button': 'Get a consultation',
    'toefl.footer.note': 'Your English for studying abroad.',

    'summerCamp.hero.badge': 'SUMMER CAMP IN ALMATY',
    'summerCamp.hero.title': 'Upstream Universe Summer Camp',
    'summerCamp.hero.text': 'Daily English practice, new friends, games, and adventures — an unforgettable summer for kids and teens in Almaty.',
    'summerCamp.highlight1.title': 'Daily English',
    'summerCamp.highlight1.text': 'Practice in a lively, engaging way',
    'summerCamp.highlight2.title': 'Activities & games',
    'summerCamp.highlight2.text': 'Sports, creativity, and team projects',
    'summerCamp.highlight3.title': 'International atmosphere',
    'summerCamp.highlight3.text': 'New friends and bright memories',
    'summerCamp.cta1': 'Sign up for camp',
    'summerCamp.cta2': 'Summer programs abroad',
    'summerCamp.hero.imageAlt': 'Upstream Universe summer camp',
    'summerCamp.section1.eyebrow': 'Summer at Upstream Universe',
    'summerCamp.section1.title': 'Every day is a new story',
    'summerCamp.section1.text': 'Our summer camp combines English learning with active games, creativity, and team projects. Kids grow, connect, and make friends in a friendly, safe environment.',
    'summerCamp.program.language.title': '🗣️ Language immersion',
    'summerCamp.program.language.li1': 'Daily English practice in a playful way',
    'summerCamp.program.language.li2': 'Interactive lessons and speaking clubs',
    'summerCamp.program.language.li3': 'Practice within an English-speaking environment',
    'summerCamp.program.team.title': '🏆 Team & sports',
    'summerCamp.program.team.li1': 'Team projects and shared challenges',
    'summerCamp.program.team.li2': 'Outdoor sports activities',
    'summerCamp.program.team.li3': 'Building leadership and teamwork skills',
    'summerCamp.program.creative.title': '🎨 Creativity & games',
    'summerCamp.program.creative.li1': 'Creative workshops and crafts',
    'summerCamp.program.creative.li2': 'Board games and active games',
    'summerCamp.program.creative.li3': 'Space for self-expression and imagination',
    'summerCamp.program.events.title': '🎉 Special events',
    'summerCamp.program.events.li1': 'Foam party and themed days',
    'summerCamp.program.events.li2': 'Outdoor adventures',
    'summerCamp.program.events.li3': 'A friendly, international atmosphere',
    'summerCamp.gallery.title': 'The spirit of our camp',
    'summerCamp.gallery.subtitle': 'Real emotions, new friends, and unforgettable moments every day.',
    'summerCamp.gallery.alt1': 'Upstream Universe summer camp — photo 1',
    'summerCamp.gallery.alt2': 'Upstream Universe summer camp — photo 2',
    'summerCamp.cta.title': 'Sign your child up for summer camp',
    'summerCamp.cta.text': 'Give this summer real memories: daily English, new friends, and activities every day at Upstream Universe.',
    'summerCamp.cta.button': 'Sign up now',
    'summerCamp.footer.note': 'An unforgettable summer of English in Almaty.',

    'language.switcher.ru': 'RU | EN',
    'language.switcher.en': 'RU | EN',
  }
};

function getSavedLanguage() {
  const saved = localStorage.getItem(UPSTREAM_LANG_KEY);
  return SUPPORTED_LANGS.includes(saved) ? saved : DEFAULT_LANG;
}

function saveLanguage(lang) {
  localStorage.setItem(UPSTREAM_LANG_KEY, lang);
}

function translateElement(node, lang) {
  const key = node.dataset.langKey;
  const htmlKey = node.dataset.langHtmlKey;
  const altKey = node.dataset.langAltKey;
  const ariaKey = node.dataset.langAriaKey;
  const hrefKey = node.dataset.linkKey || node.dataset.hrefKey || node.dataset.langHrefKey;

  if (htmlKey) {
    const translation = translations[lang][htmlKey];
    if (translation !== undefined) node.innerHTML = translation;
  }

  if (key) {
    const translation = translations[lang][key];
    if (translation !== undefined) node.textContent = translation;
  }

  if (altKey) {
    const translation = translations[lang][altKey];
    if (translation !== undefined) node.alt = translation;
  }

  if (ariaKey) {
    const translation = translations[lang][ariaKey];
    if (translation !== undefined) node.setAttribute('aria-label', translation);
  }

  if (hrefKey) {
    const translation = translations[lang][hrefKey];
    if (translation !== undefined) node.href = translation;
  }
}

function updateSwitcherState(lang) {
  const switchers = document.querySelectorAll('.lang-switcher, .nav-lang-switcher');
  if (!switchers.length) return;

  switchers.forEach((switcher) => {
    switcher.querySelectorAll('.lang-option').forEach((option) => {
      const isActive = option.dataset.lang === lang;
      option.classList.toggle('is-active', isActive);
    });

    switcher.classList.toggle('is-en', lang === 'en');
    const ariaText = translations[lang]['header.languageButtonAria'];
    if (ariaText) switcher.setAttribute('aria-label', ariaText);
  });
}

function applyTranslations(lang) {
  const all = document.querySelectorAll('[data-lang-key], [data-lang-html-key], [data-lang-alt-key], [data-lang-href-key], [data-link-key], [data-href-key]');
  all.forEach((node) => translateElement(node, lang));

  document.documentElement.lang = lang;
  const titleNode = document.querySelector('title[data-lang-key], title[data-lang-html-key]');
  if (titleNode) {
    const key = titleNode.dataset.langKey || titleNode.dataset.langHtmlKey;
    const translation = translations[lang][key];
    if (translation !== undefined) titleNode.textContent = translation;
  }

  updateSwitcherState(lang);
}

function toggleLanguage() {
  const current = getSavedLanguage();
  const next = current === 'ru' ? 'en' : 'ru';
  saveLanguage(next);
  applyTranslations(next);
}

function setupBurgerMenu() {
  const burger = document.getElementById('burgerToggle');
  const nav = document.getElementById('siteNav');
  const overlay = document.querySelector('.mobile-nav-overlay');
  if (!burger || !nav) return;

  if (!nav.querySelector('.mobile-nav-close')) {
    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'mobile-nav-close';
    closeButton.setAttribute('aria-label', 'Close menu');
    closeButton.textContent = '×';
    nav.prepend(closeButton);
  }

  if (!overlay) {
    const newOverlay = document.createElement('div');
    newOverlay.className = 'mobile-nav-overlay';
    document.body.appendChild(newOverlay);
  }

  const menuOverlay = document.querySelector('.mobile-nav-overlay');
  const closeButton = nav.querySelector('.mobile-nav-close');

  const closeMenu = () => {
    nav.classList.remove('open');
    menuOverlay?.classList.remove('visible');
    burger.classList.remove('active');
    burger.setAttribute('aria-expanded', 'false');
    nav.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('nav-open');
  };

  const openMenu = () => {
    nav.classList.add('open');
    menuOverlay?.classList.add('visible');
    burger.classList.add('active');
    burger.setAttribute('aria-expanded', 'true');
    nav.setAttribute('aria-hidden', 'false');
    document.body.classList.add('nav-open');
  };

  nav.setAttribute('aria-hidden', 'true');

  burger.addEventListener('click', () => {
    if (nav.classList.contains('open')) {
      closeMenu();
      return;
    }
    openMenu();
  });

  closeButton?.addEventListener('click', closeMenu);
  menuOverlay?.addEventListener('click', closeMenu);

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

function setupFooterCopyright() {
  document.querySelectorAll('.site-footer').forEach((footer) => {
    if (footer.querySelector('.footer-bottom')) return;

    const bar = document.createElement('div');
    bar.className = 'container footer-bottom';

    const copyright = document.createElement('p');
    copyright.className = 'footer-copyright';
    copyright.textContent = '© 2026 Upstream Universe. All Rights Reserved.';
    bar.appendChild(copyright);

    const legalLinks = document.createElement('div');
    legalLinks.className = 'footer-legal-links';

    [
      { label: 'Privacy Policy' },
      { label: 'Terms of Use' }
    ].forEach(({ label }) => {
      const link = document.createElement('a');
      link.href = '#';
      link.textContent = label;
      link.addEventListener('click', (event) => event.preventDefault());
      legalLinks.appendChild(link);
    });

    bar.appendChild(legalLinks);
    footer.appendChild(bar);
  });
}

function setupMobileNavLinks() {
  const nav = document.getElementById('siteNav');
  if (!nav) return;

  const mobileLinks = [
    { href: 'english.html', label: 'English' },
    { href: 'ait.html', label: 'AIT' },
    { href: 'sat.html', label: 'SAT' },
    { href: 'toefl.html', label: 'TOEFL' },
    { href: 'summer-camp.html', label: 'Summer Camp' }
  ];

  const langSwitcher = nav.querySelector('.nav-lang-switcher');
  mobileLinks.forEach(({ href, label }) => {
    if (nav.querySelector(`a[href="${href}"]`)) return;
    const link = document.createElement('a');
    link.href = href;
    link.className = 'mobile-only-nav-link';
    link.textContent = label;
    if (langSwitcher) {
      nav.insertBefore(link, langSwitcher);
      return;
    }
    nav.appendChild(link);
  });
}

function setupMobileTestimonialsSlider() {
  const grid = document.querySelector('.testimonials-grid');
  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll('.testimonial-card'));
  if (cards.length < 2) return;

  let currentIndex = 0;
  let autoSlideId = null;
  let dots = [];
  let dotsContainer = document.querySelector('.mobile-testimonial-dots');

  const updateDots = () => {
    dots.forEach((dot, index) => {
      dot.classList.toggle('is-active', index === currentIndex);
    });
  };

  const scrollToIndex = (index, behavior = 'smooth') => {
    currentIndex = (index + cards.length) % cards.length;
    grid.scrollTo({
      left: currentIndex * grid.clientWidth,
      behavior
    });
    updateDots();
  };

  const stopAutoSlide = () => {
    if (!autoSlideId) return;
    window.clearInterval(autoSlideId);
    autoSlideId = null;
  };

  const startAutoSlide = () => {
    stopAutoSlide();
    autoSlideId = window.setInterval(() => {
      scrollToIndex(currentIndex + 1);
    }, 4200);
  };

  const ensureDots = () => {
    if (!dotsContainer) {
      dotsContainer = document.createElement('div');
      dotsContainer.className = 'mobile-testimonial-dots is-visible';
      cards.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'mobile-testimonial-dot';
        dot.setAttribute('aria-label', `Go to review ${index + 1}`);
        dot.addEventListener('click', () => {
          scrollToIndex(index);
          startAutoSlide();
        });
        dotsContainer.appendChild(dot);
      });
      grid.insertAdjacentElement('afterend', dotsContainer);
    }
    dots = Array.from(dotsContainer.querySelectorAll('.mobile-testimonial-dot'));
    updateDots();
  };

  grid.classList.add('is-mobile-slider');
  ensureDots();
  dotsContainer?.classList.add('is-visible');
  scrollToIndex(0, 'auto');
  startAutoSlide();

  grid.addEventListener('scroll', () => {
    const nextIndex = Math.round(grid.scrollLeft / Math.max(grid.clientWidth, 1));
    if (nextIndex === currentIndex) return;
    currentIndex = Math.max(0, Math.min(cards.length - 1, nextIndex));
    updateDots();
  }, { passive: true });

  grid.addEventListener('touchstart', stopAutoSlide, { passive: true });
  grid.addEventListener('touchend', startAutoSlide, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAutoSlide();
      return;
    }
    startAutoSlide();
  });

  let resizeTimer = null;
  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      grid.scrollTo({ left: currentIndex * grid.clientWidth, behavior: 'auto' });
    }, 150);
  });
}

function highlightActiveNav() {
  const nav = document.getElementById('siteNav');
  if (!nav) return;
  const links = Array.from(nav.querySelectorAll('a'));
  const locPath = window.location.pathname.replace(/\/index\.html$/,'/');
  links.forEach((link) => {
    try {
      const url = new URL(link.href, window.location.origin);
      const linkPath = url.pathname.replace(/\/index\.html$/,'/');
      // highlight when paths match or when hash/anchor matches current location
      if (linkPath === locPath || url.hash && url.hash === window.location.hash) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    } catch (e) {
      // ignore malformed
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  const lang = getSavedLanguage();
  applyTranslations(lang);
  const switchers = document.querySelectorAll('.lang-switcher, .nav-lang-switcher');
  switchers.forEach((switcher) => {
    switcher.addEventListener('click', (event) => {
      const option = event.target.closest('.lang-option');
      if (!option) return;
      const next = option.dataset.lang;
      if (!next) return;
      saveLanguage(next);
      applyTranslations(next);
    });
    switcher.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggleLanguage();
      }
    });
  });
  setupBurgerMenu();
  setupFooterCopyright();
  setupMobileNavLinks();
  setupMobileTestimonialsSlider();
  highlightActiveNav();
});
