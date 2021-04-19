# Личный проект «Кэт энерджи» 

* Студент: [Анастасия](https://up.htmlacademy.ru/adaptive/20/user/1385139).
* Наставник: [Вадим Новаш](https://htmlacademy.ru/profile/stakeout).

Сборка: [Cat Energy](https://cat-energy-ana-izotova.vercel.app)

---

## 📓 Описание проекта:

«Кэт энерджи» - это интернет-магазин, который поможет подобрать подходящую систему питания для вашего кота. Исходники в формате figma, по нему была выполнена pixel perfect вёрстка.

---

## 🧪 Опыт и сложности:

Стили выполнены с помощью препроцессора SCSS, сборка с помощью Gulp, ретиновая графика. Адаптивность выполнена в виде трех фиксированных позиций блоков. Самым сложным было продумать верстку с учетом измений в макете.

---

## 🔖 Общие технические требования:

- **Стандарты верстки:** HTML5, CSS3, прогрессивное улучшение.
- **Сетка:** определена в макете.
- **Адаптивность вёрстки:** мобильная, планшетная и десктопная версии («фикс» или «резина»).
- **Адаптивность графики:** ретинизация, векторные изображения.
- **Используемые фреймворки:** нет.
- **Кроссбраузерность:** Chrome, Firefox, Safari.
- **Используемая методология:** БЭМ.
- **Используемый препроцессор:** Less или Sass.
- **Используемый инструмент автоматизации:** Gulp.
- **Типографика:** частично определена в макете (прочее — на усмотрение разработчика).
- **Используемые шрифты:** Oswald, Arial.
- **Прочее:** С макетом предоставлен стайлгайд, содержащий прорисовку состояний элементов интерфейса. При любых расхождениях с макетами он должен иметь наивысший приоритет.

---

## 🕹️ Требования к поведению блоков:

### Все макеты

1. Между версиями (мобильная, планшетная, десктопная) сетка может быть как резиновой, так и фиксированной.
2. При фиксированной сетке контентная область центруется и не может быть уже макетной ширины. Фоны, которые упираются в края макета должны тянуться на всю страницу.
3. Логотип на внутренних страницах — это ссылка на главную страницу.
4. Главное меню в мобильной версии появляется под шапкой сайта.
5. Мобильное меню может быть реализовано двумя способами:
реализация без JS;
реализация с использованием JS.
6. При реализации без использования JS главное меню в мобильной версии должно быть всегда открыто, а иконка с крестиком — скрыта.
7. При реализации с использованием JS блок с главным меню в мобильной версии должен открываться при нажатии на иконку «гамбургера». Когда меню открыто, иконка «гамбургера» заменяется на крестик. При нажатии на иконку с крестиком меню закрывается.
8. Все состояния элементов при наведении и нажатии указаны в стайлгайде. Состояние ошибки должно быть реализовано только для обязательных полей формы (в макете они помечены звёздочкой).
9. Логотип Академии и ссылка HTML Academy в футере ведут на лендинг интенсива «Профессиональный HTML и CSS, уровень 2».

### Главная

#### Мобильная версия (Index > Mobile):

1. Логотип состоит из упрощённой иконки и названия магазина «Кэт энерджи».
2. Кнопка «Подобрать программу» должна вести на страницу формы для подбора программы.
3. В блоках «Похудение» и «Набор массы» ссылкой должна быть строка, начинающаяся со слова «Каталог». При нажатии должен осуществляться переход на соответствующие разделы каталога. Страницы разделов реализовывать не нужно.
4. В блоке «Живой пример» слайдер реализовывать не обязательно. Достаточно вёрстки с одной из фотографий кота. По желанию можно сделать «Было» и «Стало» кнопками переключения фотографий кота.
5. Блок карты: необходимая реализация — интерактивная карта (карты Google или Яндекса), ширина подстраивается под ширину вьюпорта (но не уже контентной ширины макета), на карте размещён маркер (может быть как кастомным, так и дефолтным), центр карты соответствует центру блока в макете.

#### Планшетная версия (Index > Tablet):

6. Блоки меняют размеры и расположение согласно макету.
7. В состав иконки логотипа добавляются новые элементы.
8. Главное меню всегда открыто вне зависимости от его состояния на мобильной версии.

#### Десктопная версия (Index > Desktop):

9. Блоки меняют размеры и расположение согласно макету.
10. В составе логотипа добавляются новые элементы.
11. Фон первого блока под шапкой тянется на всю ширину экрана и состоит из двух равных частей: левая — с белым фоном, правая — с зелёным фоном и изображением кота, которое упирается в правую границу экрана.

### Форма

1. На странице form не должно быть модального окна.

#### Мобильная версия (Form > Mobile):

1. Должны быть реализованы кастомные элементы форм.
2. У полей ввода телефона и почты должны быть указаны соответствующие типы для удобного заполнения с телефона.
3. При попытке отправить форму, в которой поля для ввода телефона или почты заполнены данными в неподходящем формате, появляется встроенное в браузер сообщение об ошибке.

#### Планшетная версия (Form > Tablet):

4. Блоки меняют размеры и расположение согласно макету.

#### Десктопная версия (Form > Desktop):

5. Блоки меняют размеры и расположение согласно макету.

### Страница каталога

#### Мобильная версия (Catalog > Mobile):

1. Изображение и название товара — ссылки на страницу с описанием товара. Страницу с описанием товара реализовывать не нужно.
2. Кнопка «Заказать» вызывает появление модального окна для оформления заказа. Модальное окно оформления заказа реализовывать не нужно. При отключенном JS должен осуществляться переход на страницу оформления заказа (страницу оформления заказа реализовывать не нужно).
3. Кнопка «Показать все» показывает новые товары. При отключенном JS должен осуществляться переход на страницу новых товаров (страницу новых товаров реализовывать не нужно).

#### Планшетная версия (Catalog > Tablet):

4. Блоки меняют размеры и расположение согласно макету.

#### Десктопная версия (Catalog > Desktop):

5. Блоки меняют размеры и расположение согласно макету.

---

## 🗺️ [Ссылка на макет в Figma](https://www.figma.com/file/MNGG3BNBJjoXZypKDeF7Mk/HTML-2-%2F-%D0%9A%D1%8D%D1%82-%D1%8D%D0%BD%D0%B5%D1%80%D0%B4%D0%B6%D0%B8-%2F-Full-(Copy)?node-id=2403%3A436&viewport=1904%2C63%2C0.19201059639453888)


---

 <a href="https://htmlacademy.ru/intensive/adaptive"><img align="left" width="50" height="50" alt="HTML Academy" src="https://up.htmlacademy.ru/static/img/intensive/adaptive/logo-for-github-2.png"></a>

 Репозиторий создан для обучения на профессиональном онлайн‑курсе «[HTML и CSS, уровень 2](https://htmlacademy.ru/intensive/adaptive)» от [HTML Academy](https://htmlacademy.ru).
