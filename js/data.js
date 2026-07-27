<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Academia Monstros | Musculação, Funcional e Aulas Coletivas</title>
    <meta name="description" content="Academia Monstros — musculação, funcional e aulas coletivas para todos os níveis. Venha treinar com força e atitude.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/custom.css">
    <script src="js/data.js" defer></script>
    <script src="js/app.js" defer></script>
  </head>
  <body>
    <a class="skip-link" href="#inicio">Ir para o conteúdo</a>

    <header class="site-header" id="topo">
      <a class="brand" href="#inicio" aria-label="Ir para o início da Academia Monstros">
        <img src="img/Logo%20dos%20monstros.png" alt="Academia Monstros">
      </a>
      <div class="header-actions">
        <a class="button button-outline" href="https://wa.me/5522997929646" target="_blank" rel="noopener">WhatsApp</a>
        <button class="menu-button" type="button" aria-controls="menu" aria-expanded="false" aria-label="Abrir menu">
          <span class="hamburger-icon" aria-hidden="true"><i></i><i></i><i></i></span>
        </button>
      </div>
    </header>

    <nav class="menu" id="menu" aria-label="Navegação principal" hidden>
      <div class="menu-panel">
        <button class="menu-close" type="button" aria-label="Fechar menu">×</button>
        <a class="menu-brand" href="#inicio" aria-label="Ir para o início da Academia Monstros">
          <img src="img/Logo%20dos%20monstros.png" alt="Academia Monstros">
        </a>
        <p class="menu-eyebrow">Navegação premium</p>
        <div class="menu-links">
          <a href="#inicio"><small>01</small> Início</a>
          <a href="#arenas"><small>02</small> Modalidades</a>
          <a href="#unidades"><small>03</small> Localização</a>
          <a href="#suporte"><small>04</small> Suporte</a>
          <button type="button" data-modal="plans"><small>05</small> Planos</button>
          <a href="#faq"><small>06</small> Dúvidas FAQ</a>
        </div>
        <div class="menu-contact"><span>Unidade principal</span><p>R. José Martinelli, 31<br>São Geraldo, Saquarema - RJ</p><a href="https://wa.me/5522997929646" target="_blank" rel="noopener">Falar no WhatsApp</a></div>
      </div>
    </nav>

    <main>
      <section class="hero" id="inicio" aria-label="Destaques da Academia Monstros">
        <div class="hero-slides" aria-hidden="true"></div>
        <div class="hero-shade"></div>
        <div class="hero-content container reveal">
          <p class="eyebrow">CF DOS MONSTORS</p>
          <h1 class="hero-title"></h1>
          <p class="hero-subtitle"></p>
          <p class="hero-description"></p>
          <div class="hero-controls" aria-label="Controle dos destaques"></div>
          <button class="button button-primary" type="button" data-modal="plans">Conheça os planos</button>
        </div>
        <a class="scroll-indicator" href="#arenas">Role para explorar <i></i></a>
      </section>

      <section class="premium-intro" aria-labelledby="premium-intro-title">
        <div class="premium-intro-top">
          <article class="premium-message reveal">
            <span class="premium-mark" aria-hidden="true"></span>
            <h2 id="premium-intro-title">Academia premium:<br><em>foco na sua</em><br>performance.</h2>
          </article>
          <article class="premium-score reveal">
            <span class="score-icon" aria-hidden="true">↯</span>
            <strong>100%</strong>
            <p>Precisão &amp; Performance</p>
          </article>
        </div>
        <div class="premium-intro-bottom">
          <figure class="premium-photo reveal">
            <img src="img/fachada%20monstros.png" alt="Fachada da academia Monstros" loading="lazy">
            <figcaption>Infraestrutura</figcaption>
          </figure>
          <div class="premium-copy reveal">
            <p>Na <strong>Academia Monstros</strong>, acreditamos que cada pessoa possui um potencial extraordinário.<br><br>Nosso compromisso é oferecer um ambiente completo, equipamentos modernos e profissionais preparados para ajudar você a conquistar seus objetivos, seja emagrecer, ganhar massa muscular ou melhorar sua qualidade de vida.</p>
          </div>
        </div>
      </section>

      <section class="arenas" id="arenas">
        <div class="section-heading container reveal">
          <p class="eyebrow">Experiências</p>
          <h2>Conheça nossas<br><em>modalidades.</em></h2>
        </div>
        <div class="modality-carousel" aria-label="Modalidades e horários">
          <article class="modality-card modality-card-musculacao reveal"><span class="modality-number">01</span><p class="eyebrow">Modalidade</p><h3>Musculação</h3><div class="schedule"><strong>Segunda a sexta</strong><span>05:20 às 22:00</span><strong>Sábado</strong><span>07:00 às 12:00</span><strong>Domingo</strong><span>08:00 às 12:00</span></div></article>
          <article class="modality-card modality-card-circuito reveal"><span class="modality-number">02</span><p class="eyebrow">Modalidade</p><h3>Circuito<br>funcional</h3><div class="schedule"><strong>Segunda, quarta e sexta</strong><span>Manhã: 06:00 · 07:00 · 08:00</span><span>Noite: 17:00 · 18:00 · 19:00</span></div></article>
          <article class="modality-card modality-card-step reveal"><span class="modality-number">03</span><p class="eyebrow">Aulas coletivas</p><h3>Step</h3><div class="schedule"><strong>Terça e quinta</strong><span>Manhã · 08:00</span></div></article>
          <article class="modality-card modality-card-combat reveal"><span class="modality-number">04</span><p class="eyebrow">Aulas coletivas</p><h3>Monstros<br>combat</h3><div class="schedule"><strong>Terça e quinta</strong><span>Manhã · 08:30</span></div></article>
          <article class="modality-card modality-card-jump reveal"><span class="modality-number">05</span><p class="eyebrow">Aulas coletivas</p><h3>Jump</h3><div class="schedule"><strong>Terça e quinta</strong><span>Noite · 18:00</span></div></article>
          <article class="modality-card modality-card-gap reveal"><span class="modality-number">06</span><p class="eyebrow">Aulas coletivas</p><h3>GAP</h3><div class="schedule"><strong>Terça e quinta</strong><span>Noite · 18:30</span></div></article>
          <article class="modality-card modality-card-danca reveal"><span class="modality-number">07</span><p class="eyebrow">Aulas coletivas</p><h3>Dança</h3><div class="schedule"><strong>Terça e quinta</strong><span>Noite · 19:00</span></div></article>
          <article class="modality-card modality-card-kickboxing reveal"><span class="modality-number">08</span><p class="eyebrow">Aulas coletivas</p><h3>Kickboxing</h3><div class="schedule"><strong>Terça e quinta</strong><span>Noite · 20:10</span></div></article>
        </div>
      </section>

      <section class="units section-pad" id="unidades">
        <div class="container section-heading reveal">
          <p class="eyebrow">Onde estamos</p>
          <h2>Encontre nossa <em>unidade.</em></h2>
          <p>Venha treinar com a gente. Use o mapa para localizar a Academia Monstros e traçar sua rota.</p>
        </div>
        <div class="location-map container reveal">
          <iframe title="Mapa da Academia Monstros" src="https://www.google.com/maps?q=Academia%20Monstros&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div class="location-map-copy">
            <p class="eyebrow">Academia Monstros</p>
            <h3>Venha nos visitar.</h3>
            <p>Abra a rota no Google Maps e chegue até a nossa unidade com facilidade.</p>
            <a class="button button-primary" href="https://maps.app.goo.gl/nmuMxrBg1yimFaZw8" target="_blank" rel="noopener">Traçar rota no Google Maps</a>
          </div>
        </div>
      </section>

      <section class="support section-pad" id="suporte">
        <div class="container support-intro reveal">
          <div><p class="eyebrow">Atendimento</p><h2>Suporte e<br><em>treino personalizado.</em></h2></div>
          <p>Na <strong>Academia Monstros</strong>, garantimos uma jornada fitness impecável com suporte especializado.</p>
        </div>
        <div class="support-grid container" id="support-grid"></div>
      </section>

      <section class="faq section-pad" id="faq">
        <div class="container faq-layout">
          <div class="section-heading reveal"><p class="eyebrow">Dúvidas frequentes</p><h2>Como podemos <em>ajudar?</em></h2></div>
          <div class="faq-list" id="faq-list"></div>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <a href="#topo">
        <img src="img/Logo dos monstros.png" alt="Academia Monstros" style="height: 60px;">
      </a>
      <p>Performance, saúde e bem-estar.</p>
      <div class="footer-links">
        <a href="#topo">Voltar ao topo ↑</a>
        <a href="https://www.instagram.com/cfdosmonstros?igsh=MWo5Y2RwcXRmd2Fsbg==" target="_blank" rel="noopener" aria-label="Instagram da Academia Monstros" title="Siga-nos no Instagram" style="font-size: 24px; text-decoration: none;">📷</a>
      </div>
    </footer>

    <a class="whatsapp-float" href="https://wa.me/5522997929646" target="_blank" rel="noopener" aria-label="Falar com a Academia Monstros pelo WhatsApp">
      <span aria-hidden="true">◔</span><b>Fale conosco</b>
    </a>

    <div class="modal" id="modal" hidden aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div class="modal-backdrop" data-close-modal></div>
      <section class="modal-card" id="modal-card">
        <button class="modal-close" type="button" data-close-modal aria-label="Fechar">×</button>
        <div id="modal-content"></div>
      </section>
    </div>
  </body>
</html>
