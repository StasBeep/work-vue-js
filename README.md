# work-vue-js
Работа с VUE

## Версия
>Версия vue -v2

## Содержание
* [Лекция 1](#Лекция-1)
* [Лекция 2](#Лекция-2)
* [Лекция 3](#Лекция-3)
* [Лекция 4](#Лекция-4)
* [Лекция 5](#Лекция-5)
* [Лекция 6](#Лекция-6)
* [Лекция 7](#Лекция-7)

## Лекция 1
Vue - прогрессивный framwork - так как для проекта используется только те элементы, которые были подключены изначально или в течение создания проекта

Подключение vue
``` теринал
npm install -g @vue/cli
```
Создание проекта
```терминал
vue create [название проекта]
```

! Может возникнуть ошибка при создании проекта, так как помешает PowerShell (Windows)!<br>
Для создаания проекта нужно запустить `от имени администратора` PowerShell
Ввести:
```PowerShell консоль
Get-ExecutionPolicy
```
Ответ:
```PowerShell консоль
Restricted
```
Значит защита включена <br>
Далее нужно ввести:
```PowerShell консоль
Set-ExecutionPolicy unrestricted
```
И подтвердить `Y`
Далее настраиваем свой проект под себя.

После настройки проекта появлятся папки и файлы:
* public
  - index.html (файл для тега приложения app)
  - Иконка для сайта
* src
  - assets (картинки, шрифты, видео, треки
  - components (компоненты vue)
  - router (асинхронный запрос и переключение между ссылками)
  - store (хранилище данных)
  - views (routing (переключение между routerами)
  - App (файл начала)
  - main (подключение зависимостей и плагинов и компонентов)
* test (тесты)
* vue.config.js (сборщик js)
* package.json
* другие файлы подстройки

Также можно созать проект на сайте vue через vue ui (создание сайта через браузер)

Для запуска сервера:
```терминал
npm run serve
```

Файл vue состоит из тегов:
* template
* script
* style

Название компонентов с большой буквы, используется как тег в родительском компоненте

Использование переменных через двойные фигурные скобки {{ переменная }}

Параметр data: () => ({}) - хранит переменные

Утилина (дополнение) на браузер `vue.js devtools` для отслеживания компонентов vue

В компооненте могут использоваться props -> хаарактеристики, которые передаются как параметры в тег компонента, передача от родителя к дочерним компонентам <br>
props: {
  msg: string
}

Чтобы передать данные от родителя к дочке нужно прописать :props="[родительские данные]"

v-on или @ - подписка на событие <br>
События: <br>
* click
* mouseover
* focus

v-model="[переменная]" - связь между переменными и тегами (input - например)

v-model.number - связь с числом
       .trim - убирает пробелы
       .lazy - реагирует на изменения (законченность ввода)

v-if - условие

v-show - видимость

v-for - цик (нужны ключи, чтобы циклы работали корректно)

methods: {} - раздел с функциями, реакция только тогда, когда произойдёт действие

`scoped`  - изоляция компонентов (ликвидация повторений между компонентами)

## Лекция 2
При использовании цикла:
```vue
<tag v-for="(item, idx) in array" :key=="idx"> {{ item }} </tag> 
```
Ключ (key) должен быть индивидуальным

Для просмотра всего содержимого компонента из консоли нужно прописать:
```console
this.$[название компонента]
```

Реактивность - реакция на каждое действие
```vue
this.$set([переменная хранения this.tags], key, value)
```
computed {} - раздел вычисления без каких либо действий, до отображения страницы и её содержимого

watch {} - раздел наблюдения за переменными <br>
Например: <br>
result: function(newValue, oldValue), где result - переменная за которой наблюдаем, newValue - новое значение переменной, oldValue - старое значение переменной

## Лекция 3
Хуки жизненного цикла:
* Начальные данные и настройка
  - beforeCreate(){} - до отрисовки компонента (задача начальных условий)
  - created(){} - отрисовка компонента, настройка
* Визуальная часть
  -  beforeMount(){} - перед монтированием компонента
  -  Mounted(){} - компонент смонтирован и есть дерево
  -  beforeUpdate(){} -перед перерисовкой данных (отправка на сервер)
  -  Update(){} - отрисовка уже произошла (произошли изменения)
* Разрушение
  - beforeDestroy(){} - перед уничтожением
  - destroy(){} - уничтожение

this.$el - обращение к элементам компонента

Должна происходить отпска от слушателей, иначе серверу будет сложно реагировать или забьёт всю память

Для использования классов в разделе style нужно прописать module, тогда в теге можно прописать :class="[$style.wrapper]"

Прокидывание данных наверх от дочерних компонентов к родительскому, использование $emit <br>
$emit{'[название эмита]', [переменная], true} , для вызова нужно в теге прописать @[название эмината]="[название функции]"
<a href="https://github.com/StasBeep/work-vue-js/commit/6aa15d04af5c61604c35640e7056730ad0ac26b9">Подробнее</a>

## Лекция 4
Vuex - хранилище - все данные лежат так, чтобы не передавать их через многие шаги

У vuex три состояния:
* state: {} - простое состояние
* mutations: {} - изменение состояния
* getters: {} - выдавать (операции)
* actions: {} - асинхронных запрос - передаётся в mutations

Для поключения хранилища:
```терминал
npm i vuex
```

Директория хранилища -> store

В самом файле хранилища (index.js) нужно прописать подключения:
```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({})
```

Чтобы загрузить данные нужно выпонить:
- this.$store.commit('[название метода в store]', [куда помещать (переменная])
- через {mapMutations, mapGetters, mapActions}

Для подключение mapGetters, mapMutations, mapActions - нужно через import

!Внимание! При создании проектов, если версия vue не совпадает с версией vuex, то будет ошибка

hashchange - событие windows (осматривает хэш строки)
location - параметры командной строки запроса
pushstate - история перехода браузера

## Лекция 5
Router - для работы с routing

Установка router:
```терминал
npm i vue-router
```

Директория router (работает с директорией view)

Основные теги:
- `<router-link to="/about">About</router-link>` - Ввод/запрос на router
- `<router-view>`

Для работы с методами: this.$router.push({name:"NotFound"}) - Вызов определённого роутера

Стили на определённый формат (например активация) определённой кнопки (module) <br>
:class="{[$style.active]:cur == i}"

При исследовании объекта можно с помощью "optional chaining", то есть "?." или "??" задать вопрос объекту <br>
Например:
```js
Object = {
  name: Carl
  cat: {
    name: 'Kyl'
  }
}
```

Вопрос к объекту Object.dog?.name => undefined, так как в объекте нет dog <br>
"??" - или в объекте - после вопроса <br>
Например: `this.$route.query?.value??null` - если в роуте query нет раздела value, то выдать nulll

## Лекция 6
Плагины - кусок кода (для импортации и частого использования определённых методов "библиотека")

Habr: Ох уж эти модальные окна

Динамический компонент вызывается тегом `<component>`, c атрибутом `is=""`, в котором указывается компонент, который нужно вывести. Внимание! Компонент (плагин) должен быть подключён через `import`

`<transition>` - динамический компонент `v-if` и `v-show` часто с ними применяются <br>

transition vue - анимация во vue

```js
export default {
    install(Vue) {
        // Проверка установки плагина
        if (this.installed) {
            return
        }
        this.installed = true

        Vue.prototype.$modal = {
            // Подписка на события, если в компоненте
            // есть одинакое название, то оно тоже будет отрабатывать
            // Чтобы такого не было, то используем подписку
            EventBus: new Vue(),

            show(name, settings) {
                console.log(name)
                this.EventBus.$emit('shown', {name, ...settings})
            },

            hide() {
                this.EventBus.$emit('hide')
            }
        }
    }
}
```

Подключение в main.js (плагина)
```js
// Подключение плагина
import modal from './plagins/ModalWindow'

Vue.use(modal)
```

## Лекция 7
Тестирование

vue-test utils - сайт для тестов

Установка: (через `npm i` установится посленяя версия и повлечёт за собой ошибки)

Установка происходит в ручную в package.json
```json
script: {
  "test":"jest"
}

"@vue/test-utils": "^1.2.0"
"jest":"26.6.3"
"vue-jest":"^3.0.7"
"babel-jest":"26.6.3"
"@babel/core":"^7.14.3"
"babel/core":"7.0.0-bridge.0"

"jest": {
    "moduleFileExtensions": [
      "js",
      "vue"
    ],
    "transform": {
      ".*\\.(vue)$": "<rootDir>/node_modules/vue-jest",
      ".+\\.js$": "<rootDir>/node_modules/babel-jest"
    },
    "collectCoverage": true,
    "collectCoverageFrom": [
      "**/*.{js,vue}",
      "!**/node_modules/**",
      "!**coverage/**"
    ]
  }
```

Все тесты пишутся [название тестируемого компонента].test.js

Функция expect - передаётся значение, которое хотим проверить <br>
Например:
```js
test('My test', ()=> {
  expect(Math.max(1,5,10).toBe(10)
}
```

* .toBe() - что ожидается
* .toEqual() - проверка структуры более сложных типов (например строк)
* .toContain() -проверяет содержание массивов или объектов. Для сравнения используется оператор ===

## Лекция 8
Vuetify V3

Подключение
```терминал
vue add vuetify
```

Быстрая стилизация с адаптивом (документация на сайте vuetify)
```vue
<v-pagination
   v-model="activePage"
   :length="numberPage"
   prev-icon="mdi-menu-left"
   next-icon="mdi-menu-right"
   :v-bind="onClick(activePage)"
></v-pagination>
```

Построение графиков на сайте: <a href="https://www.chartjs.org/docs/latest/charts/doughnut.html#doughnut">Chart.js</a>
