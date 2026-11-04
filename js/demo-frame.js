/* The complete editor runs in its own viewport so frame scaling preserves pointer coordinates. */
window.demoFrame = DemoFrame.mount({
  stage: document.getElementById('demo-stage'),
  head: { title: 'Виджет «Таблица»' },
  devices: [
    { id: 'monitor', icon: 'monitor', label: 'Монитор', size: '1600×900', name: 'монитор' }
  ],
  device: 'monitor',
  scenarios: [{ id: 'demo', title: 'Общее демо' }],
  value: { scenario: 'demo' },
  links: [{
    title: 'Макет в Figma',
    href: 'https://www.figma.com/proto/BWdweg8jrgKlemw9VsiO9W/%D0%92%D0%B8%D0%B4%D0%B6%D0%B5%D1%82-%22%D0%A2%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D0%B0%22?node-id=652-75125&viewport=327%2C725%2C0.15&t=Fk1QWmyLkgtmM0Ic-8&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=652%3A75125&page-id=652%3A55063&hide-ui=1'
  }]
});
