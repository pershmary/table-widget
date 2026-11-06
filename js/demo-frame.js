/* A fixed-size canvas keeps the scene at native size; the page scrolls instead of scaling. */
const demoCanvas = document.createElement('div');
demoCanvas.className = 'demo-canvas';
const demoStage = document.getElementById('demo-stage');
demoStage.before(demoCanvas);
demoCanvas.appendChild(demoStage);
window.demoFrame = DemoFrame.mount({
  stage: demoStage,
  viewport: demoCanvas,
  panelWidth: 280,
  head: {
    title: 'Виджет “Таблица”',
    version: '27.1100',
    status: 'Устный ОК 21.08.26',
    href: 'http://axure.tensor.ru/StandardsV8/guidelines.html'
  },
  devices: [
    { id: 'monitor', icon: 'monitor', label: 'Монитор', size: '1600×900', name: 'монитор' }
  ],
  team: [
    {
      label: 'Дизайнер', name: 'Першина Мария',
      links: [
        { title: 'Согласование макета', href: 'https://online.sbis.ru/opendoc.html?guid=019f372a-d94b-799b-8809-922f4a6cbfd0&client=3' },
        { title: 'Описание БП', href: 'https://online.sbis.ru/page/kbase_entity/2aee34b7-3088-4811-8175-d43fb76422d8?folderId=e097f167-33e0-4f65-8643-7ef473342623' }
      ]
    },
    { label: 'Разработчик Web', name: 'Губин Павел' },
    { label: 'Разработчик iOS', name: 'Ципорин Андрей' },
    { label: 'Разработчик Android', name: 'Болдинов Алексей' }
  ],
  device: 'monitor',
  scenarios: [{ id: 'demo', title: 'Общее демо' }],
  value: { scenario: 'demo' },
  links: [{
    title: 'Макет в Figma',
    href: 'https://www.figma.com/proto/BWdweg8jrgKlemw9VsiO9W/%D0%92%D0%B8%D0%B4%D0%B6%D0%B5%D1%82-%22%D0%A2%D0%B0%D0%B1%D0%BB%D0%B8%D1%86%D0%B0%22?node-id=652-75125&viewport=327%2C725%2C0.15&t=Fk1QWmyLkgtmM0Ic-8&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=652%3A75125&page-id=652%3A55063&hide-ui=1'
  }]
});

demoCanvas.appendChild(window.demoFrame.root);

// Keep the ui-kit component unchanged; enhance role labels in this demo only.
['assets/roles/designer.svg', 'assets/roles/web.svg', 'assets/roles/ios.svg', 'assets/roles/android.svg'].forEach(function (src, index) {
  const label = window.demoFrame.panel.querySelectorAll('.df-team__label')[index];
  const name = label.textContent;
  const icon = document.createElement('img');
  icon.src = src;
  icon.alt = name;
  icon.width = 16;
  icon.height = index === 0 ? 16 : 17;
  label.title = name;
  label.replaceChildren(icon);
});

// Show all developers as rows in one shared card.
const developers = Array.from(window.demoFrame.panel.querySelectorAll('.df-team')).slice(1);
const developerCard = document.createElement('div');
developerCard.className = 'demo-developers';
developerCard.setAttribute('role', 'group');
developerCard.setAttribute('aria-label', 'Разработчики');
developers[0].before(developerCard);
developers.forEach(function (row) { developerCard.appendChild(row); });
