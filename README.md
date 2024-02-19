В рамках данного тестового задания тебе необходимо будет реализовать небольшое React-приложение с использованием 
библиотеки [**echarts.js**](https://echarts.apache.org/en/index.html);
библиотеки компонентов [**Consta UI Kit**](https://consta.design/libs/uikit)

- Макет дешборда: https://www.figma.com/file/CppcOcor3NP1BfrppRgd4a/Test?node-id=0%3A1&mode=dev

- Как должна выглядеть реализация: (./assets/video.mp4)

- В папке проекта создан шаблон React-приложения, который можно использовать для работы

- В файле [**package.json**](./package.json) указаны минимально-необходимые для работы библиотеки

- В файле [**ReactECharts.ts**](./src/Echarts/ReactECharts.tsx) реализован компонент ReactECharts, который можно использовать для отрисовки элементов из библиотеки [**echarts.js**](https://echarts.apache.org/en/index.html)

Пример использования:
```
<ReactECharts option={option}/>
```

- Дополнительно большим преимуществом будет отформатированный, структурированный и типизированный код с комментариями, а так же заполненный README, где кратко описано что и как ты делал (можно удалить содержимое этого файла и написать сюда)

В качестве итогого результата должно быть реализовано приложение, обрабатывающее предоставленные данные по курсам валют и отрисовывающее визуализацию, представленную в [**макете**](https://www.figma.com/file/CppcOcor3NP1BfrppRgd4a/Test?node-id=0%3A1&mode=dev0). 


В приложении должны присутствовать:

1. Тултипы, отображающиеся при наведении на график и показывающие значение в данной точке
2. Среднее значение за период
3. Переключение курсов валют
4. Компоненты из библиотеки Consta UI Kit

Написанный код нужно залить на Github и в обратном письме выслать ссылку на репозиторий (обязательное проверьте, чтобы репозиторий был открытым).