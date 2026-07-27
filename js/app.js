/* Interações do site — JavaScript puro, sem frameworks ou bibliotecas. */
(() => {
  'use strict';
  const data = window.biohitData;
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];
  const modal = $('#modal');
  const modalCard = $('#modal-card');
  const modalContent = $('#modal-content');

  function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[char]);
  }

  function openModal(content, theme = '') {
    modalCard.className = `modal-card ${theme}`;
    modalContent.innerHTML = content;
    const title = $('h2', modalContent);
    if (title) title.id = 'modal-title';
    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    $('.modal-close', modalCard).focus();
  }

  function closeModal() {
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function plansModal() {
    openModal(`
      <button class="modal-close" type="button" data-close-modal aria-label="Fechar">×</button>
      <p class="eyebrow">Academia Monstros</p>
      <h2>Conheça nossos <em>planos.</em></h2>
      <p class="lead">Escolha a opção que melhor combina com a sua rotina e comece hoje.</p>
      <div class="plan-list monstros-plan-list">
        <article class="plan monstros-plan">
          <h3>Plano mensal</h3>
          <div class="price"><small>R$</small> 159<small>,00</small></div>
          <p>Mensalidade sem compromisso anual.</p>
          <a class="button button-primary modal-action" href="https://wa.me/557591877465" target="_blank" rel="noopener">Quero este plano</a>
        </article>
        <article class="plan monstros-plan highlight">
          <h3>Clube + Monstros</h3>
          <div class="club-entry"><span>Entrada de</span><strong>R$ 59,00</strong></div>
          <div class="club-installments">+ 12x de <b>R$ 109,00</b> sem juros no cartão</div>
          <p class="club-benefits"><b>Benefícios</b>Musculação<br>Aulas coletivas<br>50% de desconto na primeira avaliação física.</p>
          <a class="button button-primary modal-action" href="https://wa.me/557591877465" target="_blank" rel="noopener">Quero este plano</a>
        </article>
      </div>`);
  }

  function unitModal(index) {
    const unit = data.units[index];
    const gallery = unit.photos.map(photo => `<img src="${escapeHtml(photo)}" alt="Ambiente ${escapeHtml(unit.name)}" loading="lazy">`).join('');
    openModal(`
      <button class="modal-close" type="button" data-close-modal aria-label="Fechar">×</button>
      <p class="eyebrow">Unidade premium</p><h2>${escapeHtml(unit.name)}</h2>
      <div class="info-list"><div><strong>Localização</strong><span>${escapeHtml(unit.address)}</span></div><div><strong>Horários</strong><span>Seg a Sex: ${escapeHtml(unit.weekdays)}<br>Sábado: ${escapeHtml(unit.saturday)}<br>Domingo: ${escapeHtml(unit.sunday)}</span></div><div><strong>Contato</strong><span>${escapeHtml(unit.phone)}</span></div></div>
      <a class="button button-primary contact-button" href="https://wa.me/${encodeURIComponent(unit.phone)}" target="_blank" rel="noopener">Falar com esta unidade</a>
      <div class="detail-gallery">${gallery}</div>`);
  }

  function arenaModal(index) {
    const arena = data.arenas[index];
    openModal(`
      <button class="modal-close" type="button" data-close-modal aria-label="Fechar">×</button>
      <p class="eyebrow">Arena Biohit</p><h2>${escapeHtml(arena.title)}</h2><p class="lead">${escapeHtml(arena.details)}</p>
      <div class="detail-gallery"><img src="${escapeHtml(arena.image)}" alt="${escapeHtml(arena.title)}"><img src="${escapeHtml(arena.image)}" alt="${escapeHtml(arena.title)}"><img src="${escapeHtml(arena.image)}" alt="${escapeHtml(arena.title)}"></div>`);
  }

  function visitModal() {
    openModal(`
      <button class="modal-close" type="button" data-close-modal aria-label="Fechar">×</button>
      <p class="eyebrow">Academia Monstros</p>
      <h2>Agende sua <em>visita.</em></h2>
      <p class="lead">Preencha seus dados e enviaremos sua solicitação diretamente para o nosso WhatsApp.</p>
      <form class="visit-form" id="visit-form">
        <label>Seu nome<input name="name" type="text" autocomplete="name" required></label>
        <div class="visit-form-row"><label>Data da visita<input name="date" type="date" required></label><label>Horário preferido<input name="time" type="time" required></label></div>
        <label>O que você procura? <small>(opcional)</small><textarea name="message" rows="4" placeholder="Ex.: quero conhecer a musculação e as aulas coletivas."></textarea></label>
        <button class="button button-primary" type="submit">Enviar pelo WhatsApp</button>
      </form>`);
    $('#visit-form', modalContent).addEventListener('submit', event => {
      event.preventDefault();
      const form = new FormData(event.currentTarget);
      const note = String(form.get('message')).trim();
      const text = `Olá, meu nome é ${form.get('name')}.%0A%0AGostaria de agendar uma visita à Academia Monstros para ${form.get('date')} às ${form.get('time')}.${note ? `%0A%0AO que estou procurando: ${note}` : ''}`;
      window.open(`https://wa.me/557591877465?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    });
  }

  function supportModal(type) {
    const templates = {
      manager: ['Falar com gerente', 'Atendimento administrativo de segunda a sexta, das 13:30 às 18:30.', '<a class="button button-primary contact-button" href="https://wa.me/557591877465" target="_blank" rel="noopener">Falar agora no WhatsApp</a>'],
      personal: ['Atue como personal', 'Credenciamento e atendimento para profissionais que desejam atender na REDE BIOHIT.', '<div class="info-list"><div><strong>Investimento mensal</strong><span>R$ 219,90 / mês o plano<br>+ R$ 100,00 pela camisa oficial</span></div><div><strong>Requisitos</strong><span>CREF ativo e válido · regularidade profissional · ao menos 1 aluno ativo · fardamento oficial</span></div></div>'],
      dropin: ['Treino avulso', 'Treine no seu tempo, sem burocracias de planos.', '<div class="plan-list"><article class="plan"><h3>Musculação e aulas coletivas</h3><div class="price"><small>R$</small> 50<small>,00</small></div><p>01 diária · válido por 24h</p></article><article class="plan"><h3>Bike spinning</h3><div class="price"><small>R$</small> 50<small>,00</small></div><p>1 aula · válido por 24h</p></article><article class="plan"><h3>Mini pacote</h3><div class="price"><small>R$</small> 250<small>,00</small></div><p>10 diárias · válido por 45 dias</p></article></div>']
    };
    const item = templates[type];
    openModal(`<button class="modal-close" type="button" data-close-modal aria-label="Fechar">×</button><p class="eyebrow">REDE BIOHIT</p><h2>${item[0]}</h2><p class="lead">${item[1]}</p>${item[2]}`, type === 'dropin' ? 'red' : '');
  }

  function renderContent() {
    const slides = $('.hero-slides');
    const controls = $('.hero-controls');
    slides.innerHTML = data.heroSlides.map((slide, index) => `<div class="hero-slide ${index === 0 ? 'active' : ''}" style="background-image:url('${slide.image}')"></div>`).join('');
    controls.innerHTML = data.heroSlides.map((_, index) => `<button type="button" class="${index === 0 ? 'active' : ''}" data-slide="${index}" aria-label="Ir para destaque ${index + 1}"></button>`).join('');
    const arenaGrid = $('#arena-grid');
    if (arenaGrid) arenaGrid.innerHTML = data.arenas.map((arena, index) => `<article class="arena-card reveal"><img src="${arena.image}" alt="${escapeHtml(arena.title)}" loading="lazy"><div class="arena-card-content"><span class="arena-number">0${index + 1}</span><div><h3>${escapeHtml(arena.title)}</h3><p>${escapeHtml(arena.description)}</p><button type="button" data-arena="${index}">Explorar arena →</button></div></div></article>`).join('');
    const unitGrid = $('#unit-grid');
    if (unitGrid) unitGrid.innerHTML = data.units.map((unit, index) => `<article class="unit-card reveal"><p class="eyebrow">Unidade premium</p><h3>${escapeHtml(unit.name)}</h3><p>${escapeHtml(unit.address)}</p><button type="button" data-unit="${index}">Ver detalhes →</button></article>`).join('');
    $('#support-grid').innerHTML = data.support.map((item, index) => `<article class="support-card reveal" data-support="${item.action}"><span class="number">0${index + 1}</span><h3>${escapeHtml(item.name)}</h3><p>${escapeHtml(item.description)}</p></article>`).join('');
    $('#faq-list').innerHTML = data.faq.map(([question, answer]) => `<article class="faq-item"><button class="faq-question" type="button">${escapeHtml(question)}<span>+</span></button><div class="faq-answer"><p>${escapeHtml(answer)}</p></div></article>`).join('');
  }

  function setupHero() {
    let active = 0;
    const hero = $('.hero');
    const title = $('.hero-title'); const subtitle = $('.hero-subtitle'); const description = $('.hero-description');
    const show = index => {
      active = index;
      const slide = data.heroSlides[index];
      $$('.hero-slide').forEach((element, i) => element.classList.toggle('active', i === index));
      $$('[data-slide]').forEach((element, i) => element.classList.toggle('active', i === index));
      title.textContent = slide.title; subtitle.textContent = slide.subtitle; description.textContent = slide.description;
    };
    $$('[data-slide]').forEach(button => button.addEventListener('click', () => show(Number(button.dataset.slide))));
    hero.addEventListener('pointerdown', event => {
      if (event.pointerType === 'touch') hero.classList.toggle('show-color');
    }, { passive: true });
    show(0);
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInterval(() => show((active + 1) % data.heroSlides.length), 6000);
    }
  }

  function setupEvents() {
    const menu = $('#menu'); const menuButton = $('.menu-button');
    const closeMenu = () => { menu.hidden = true; menuButton.setAttribute('aria-expanded', 'false'); document.body.style.overflow = ''; };
    menuButton.addEventListener('click', () => { menu.hidden = false; menuButton.setAttribute('aria-expanded', 'true'); document.body.style.overflow = 'hidden'; });
    $('.menu-close').addEventListener('click', closeMenu); $$('.menu a', menu).forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('click', event => {
      const target = event.target.closest('[data-modal], [data-arena], [data-unit], [data-support], [data-close-modal]');
      if (!target) return;
      if (target.hasAttribute('data-close-modal')) return closeModal();
      if (target.dataset.modal === 'plans') return plansModal();
      if (target.dataset.arena !== undefined) return arenaModal(Number(target.dataset.arena));
      if (target.dataset.unit !== undefined) return unitModal(Number(target.dataset.unit));
      const action = target.dataset.support;
      if (action === 'payment') window.open('https://pagamento.biohitclub.com.br', '_blank');
      else if (action === 'plans') plansModal();
      else if (action === 'manager') visitModal();
      else if (action === 'app') window.open('https://play.google.com/store/apps/details?id=com.sistemasca.scaaluno', '_blank', 'noopener');
      else supportModal(action);
    });
    document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeModal(); closeMenu(); } });
    $$('.faq-question').forEach(button => button.addEventListener('click', () => { const item = button.closest('.faq-item'); item.classList.toggle('open'); $('span', button).textContent = item.classList.contains('open') ? '−' : '+'; }));
    const updateHeader = () => $('.site-header').classList.toggle('scrolled', scrollY > 40);
    addEventListener('scroll', updateHeader, { passive: true });
    updateHeader();
  }

  function setupReveal() {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), { threshold: .12 });
    $$('.reveal').forEach(element => observer.observe(element));
  }

  renderContent(); setupHero(); setupEvents(); setupReveal();
})();
