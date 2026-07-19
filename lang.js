const UPSTREAM_LANG_KEY = 'upstreamLang';
const DEFAULT_LANG = 'ru';
const SUPPORTED_LANGS = ['ru', 'en'];

const translations = {
  ru: {
    'meta.home.title': 'Upstream — Образовательный центр, Алматы',
    'meta.ielts.title': 'IELTS — Upstream Universe',
    'meta.summer.title': 'Летние программы — Upstream Universe',
    'meta.english.title': 'Разговорный английский — Upstream',

    'header.home': 'Главная',
    'header.courses': 'Курсы',
    'header.ielts': 'IELTS',
    'header.summer': 'Summer Abroad ✈️',
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

    'hero.badge': 'UPSTREAM UNIVERSE',
    'hero.title': 'Английский | IELTS |<br>Математика | Казахский язык',
    'hero.text': 'Upstream Almaty — образовательный центр с 10-летним опытом. Готовим учеников к IELTS с носителями, развиваем талант и уверенность.',
    'hero.highlight1.title': 'IELTS 7.5',
    'hero.highlight1.text': 'за 3 месяца',
    'hero.highlight2.title': '60%',
    'hero.highlight2.text': 'практики в уроке',
    'hero.highlight3.title': 'Пробный урок',
    'hero.highlight3.text': 'подбор группы и уровня',
    'hero.cta1': 'Записаться на пробный урок',
    'hero.cta1Href': 'https://wa.me/77055844467?text=Здравствуйте!%20Хочу%20записаться%20на%20пробный%20урок',
    'hero.cta2': 'Instagram',
    'hero.panelText': 'Upstream Almaty — 10 лет формируем фундамент успешного будущего детей',
    'hero.imageAlt': 'Команда Upstream',
    'hero.kidsExpectTitle': 'Что ждёт детей:',
    'hero.campImageAlt': 'Летний лагерь Upstream',
    'hero.mapImageAlt': 'Локация Upstream на карте',

    'services.title': 'Наши курсы',
    'services.subtitle': 'Коротко и по делу — программы, которые работают: от подготовки к экзаменам до развития творческого потенциала.',

    'course.english.title': 'Английский',
    'course.english.desc': 'Коммуникативный курс для детей и подростков: живые разговорные практики, грамматика в контексте и подготовка к школьным экзаменам. Небольшие группы и индивидуальный подход.',
    'course.english.cta': 'Подробнее',
    'course.ielts.title': 'Подготовка к IELTS',
    'course.ielts.desc': 'Интенсивная подготовка с носителями языка: стратегия, тренировки по всем модулям и имитация экзаменационных условий. Цель — уверенное 6.5–8.0 и выше.',
    'course.ielts.cta': 'Подробнее об IELTS',
    'course.math.title': 'Математика',
    'course.math.desc': 'Курсы по школьной программе и углублённая подготовка к олимпиадам: понятные объяснения, шаги решения и регулярные контрольные работы для стабильного прогресса.',
    'course.vocal.title': 'Вокал',
    'course.vocal.desc': 'Индивидуальные и групповые занятия по технике дыхания, постановке голоса и сценическому мастерству. Развиваем слух, артистизм и уверенность на выступлениях.',

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
    'summer.section3.title': 'Всё, чтобы ваше лето прошло комфортно и эффектно.',
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

    'language.switcher.ru': '🇷🇺 Русский',
    'language.switcher.en': '🇬🇧 English',
  },
  en: {
    'meta.home.title': 'Upstream — Education Center, Almaty',
    'meta.ielts.title': 'IELTS — Upstream Universe',
    'meta.summer.title': 'Summer Programs — Upstream Universe',
    'meta.english.title': 'Conversational English — Upstream',

    'header.home': 'Home',
    'header.courses': 'Courses',
    'header.ielts': 'IELTS',
    'header.summer': 'Summer Abroad ✈️',
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

    'hero.badge': 'UPSTREAM UNIVERSE',
    'hero.title': 'English | IELTS |<br>Math | Kazakh Language',
    'hero.text': 'Upstream Almaty is an education center with 10 years of experience. We prepare students for IELTS with native tutors, build talent, and foster confidence.',
    'hero.highlight1.title': 'IELTS 7.5',
    'hero.highlight1.text': 'in 3 months',
    'hero.highlight2.title': '60%',
    'hero.highlight2.text': 'practice during each lesson',
    'hero.highlight3.title': 'Trial lesson',
    'hero.highlight3.text': 'level and group matching',
    'hero.cta1': 'Book a trial lesson',
    'hero.cta2': 'Instagram',
    'hero.panelText': 'Upstream Almaty — 10 years building the foundation for students’ success',
    'hero.imageAlt': 'Upstream team',
    'hero.campImageAlt': 'Upstream summer camp',
    'hero.mapImageAlt': 'Upstream location on the map',

    'services.title': 'Our Courses',
    'services.subtitle': 'Clear and effective programs: from exam prep to creative development.',

    'course.english.title': 'English',
    'course.english.desc': 'A communication-focused course for kids and teens: live speaking practice, grammar in context, and school exam prep. Small groups with personal attention.',
    'course.english.cta': 'Learn more',
    'course.ielts.title': 'IELTS Preparation',
    'course.ielts.desc': 'Intensive preparation with native tutors: strategy, training for all exam modules, and simulation of test conditions. Goal — a confident 6.5–8.0 and above.',
    'course.ielts.cta': 'More about IELTS',
    'course.math.title': 'Math',
    'course.math.desc': 'School program courses and olympiad prep: clear explanations, step-by-step solutions, and regular checks for stable progress.',
    'course.vocal.title': 'Vocal',
    'course.vocal.desc': 'Individual and group lessons in breathing, voice training, and stage performance. We develop ear training, artistry, and stage confidence.',

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

  if (!overlay) {
    const newOverlay = document.createElement('div');
    newOverlay.className = 'mobile-nav-overlay';
    document.body.appendChild(newOverlay);
  }

  const menuOverlay = document.querySelector('.mobile-nav-overlay');

  const closeMenu = () => {
    nav.classList.remove('open');
    menuOverlay?.classList.remove('visible');
    burger.classList.remove('active');
    burger.setAttribute('aria-expanded', 'false');
  };

  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuOverlay?.classList.toggle('visible', isOpen);
    burger.classList.toggle('active', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  menuOverlay?.addEventListener('click', closeMenu);

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
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
});
