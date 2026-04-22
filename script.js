const CONTACT_EMAIL = "mariodlahorrafalomir@gmail.com";

const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
const form = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");
const year = document.querySelector("[data-year]");
const revealElements = document.querySelectorAll(".reveal");
const codeWindow = document.querySelector("[data-code-window]");
const codeButtons = document.querySelectorAll("[data-code-language]");
const codeSnippets = {
  java: `
    <p>//Prueba a pulsar otro boton</p>
    <p><span>public class</span> Mario {</p>
    <p class="indent"><span>public static void</span> main(String[] args) {</p>
    <p class="indent-deep">Mario mario = <span>new</span> Mario();</p>
    <p class="indent-deep">mario.mejorar(<strong>"aprender"</strong>, <strong>"mejorar"</strong>);</p>
    <p class="indent">}</p>
    <p class="indent"><span>void</span> mejorar(String objetivo, String actitud) {</p>
    <p class="indent-deep">System.out.println(objetivo + <strong>" para "</strong> + actitud);</p>
    <p class="indent">}</p>
    <p>}</p>
  `,
  javascript: `
    <p><span>const</span> currentProjects = [</p>
    <p class="indent">{ <strong>name</strong>: <strong>"HelpFarma"</strong>, <strong>status</strong>: <strong>"in progress"</strong> },</p>
    <p class="indent">{ <strong>name</strong>: <strong>"Gestor de eventos sociales"</strong>, <strong>status</strong>: <strong>"in progress"</strong> }</p>
    <p>];</p>
    <p></p>
    <p><span>currentProjects</span>.forEach(project =&gt; {</p>
    <p class="indent"><span>console</span>.log(project.name);</p>
    <p>});</p>
      `,
  html: `
    <p><span>&lt;section</span> id=<strong>"location"</strong><span>&gt;</span></p>
    <p class="indent"><span>&lt;p&gt;</span>Nacionalidad: Española<span>&lt;/p&gt;</span></p>
    <p class="indent"><span>&lt;p&gt;</span>Ubicacion: Castellon, España<span>&lt;/p&gt;</span></p>
    <p><span>&lt;/section&gt;</span></p>
  `,
  css: `
    <p><span>.mini-2004</span> {</p>
    <p class="indent">background: <strong>rojo</strong>;</p>
    <p class="indent">details: <strong>blanco</strong>;</p>
    <p class="indent">personality: <strong>clasico</strong>;</p>
    <p class="indent">meaning: <strong>"Mi vehiculo"</strong>;</p>
    <p>}</p>
  `,
  c: `
    <p><span>#include</span> &lt;stdio.h&gt;</p>
    <p><span>int</span> main() {</p>
    <p class="indent">char primerLenguaje[] = <strong>"C"</strong>;</p>
    <p class="indent">printf(<strong>"Este fue mi primer lenguaje de programacion: %s\\n"</strong>, primerLenguaje);</p>
    <p class="indent"><span>return</span> 0;</p>
    <p>}</p>
  `,
  php: `
    <p><span>&lt;?php</span></p>
    <p><span>$modalidades</span> = [<strong>"Remoto"</strong>, <strong>"Presencial"</strong>, <strong>"Hibrido"</strong>];</p>
    <p></p>
    <p><span>echo</span> <strong>"Disponible para trabajar en: "</strong> . implode(<strong>", "</strong>, $modalidades);</p>
    <p><span>?&gt;</span></p>
  `,
  python: `
    <p><span>años_restantes</span> = <strong>1</strong></p>
    <p><span>media_actual</span> = <strong>7.2</strong></p>
    <p></p>
    <p class="indent"><span>print</span>(<strong>"Grado en Ingenieria Informatica en progreso..."</strong>)</p>
    <p class="indent"><span>print</span>(<strong>"Universitat Jaume I | Media actual: 7.2"</strong>)</p>
    <p><span>while</span> años_restantes &gt; 0:</p>
    <p class="indent"><span>print</span>(<strong>"Aun no se puede ejecutar completar_grado()"</strong>)</p>
    <p class="indent"><span>time.sleep(365 * 24 * 60 * 60)</strong>)</p>
    <p class="indent">años_restantes -= <strong>1</strong></p>
    <p></p>
    <p><span>print</span>(<strong>"Listo para ejecutar completar_grado()"</strong>)</p>
    <p>completar_grado()</p>
  `,
  sql: `
   <p><span>INSERT INTO</span> solicitudes_practicas <span>(mail, mensaje, modalidad)</span></p>
    <p><span>VALUES</span> (</p>
    <p class="indent"><strong>"mariodlahorrafalomir.com"</strong>,</p>
    <p class="indent"><strong>"Busco practicas para este verano y estoy disponible para trabajar en remoto, presencial o hibrido"</strong>,</p>
    <p class="indent"><strong>"Flexible"</strong></p>
    <p>);</p>
  `,
  bash: `
   <p><span>$</span> ./idiomas.sh</p>
   <p>Comprobando nivel de idiomas...</p>
   <p><strong>[✓]</strong> Valenciano  -> C1  -> alcanzado</p>
   <p><strong>[~]</strong> Ingles      -> B1  -> nivel actual</p>
   <p><strong>[>]</strong> Ingles      -> B2  -> en progreso</p>
  `,
  csharp: `
    <p><span>DateTime</span> fechaNacimiento = <span>new</span> <span>DateTime</span>(<strong>2002</strong>, <strong>11</strong>, <strong>14</strong>);</p>
    <p></p>
    <p><span>int</span> ObtenerEdadActual() {</p>
    <p class="indent"><span>var</span> hoy = <span>DateTime</span>.Today;</p>
    <p class="indent"><span>int</span> edad = hoy.Year - fechaNacimiento.Year;</p>
    <p></p>
    <p class="indent"><span>if</span> (hoy &lt; fechaNacimiento.AddYears(edad)) {</p>
    <p class="indent indent">edad--;</p>
    <p class="indent">}</p>
    <p></p>
    <p class="indent"><span>return</span> edad;</p>
    <p>}</p>
  `,
};

window.addEventListener("load", () => {
  document.body.classList.add("is-loaded");
});

if (year) {
  year.textContent = new Date().getFullYear();
}

if (codeWindow && codeButtons.length) {
  codeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const language = button.dataset.codeLanguage;

      if (!language || !codeSnippets[language]) {
        return;
      }

      codeButtons.forEach((item) => {
        const isSelected = item === button;
        item.classList.toggle("is-active", isSelected);
        item.setAttribute("aria-pressed", String(isSelected));
      });

      codeWindow.classList.remove("is-changing");
      void codeWindow.offsetWidth;
      codeWindow.innerHTML = codeSnippets[language];
      codeWindow.classList.add("is-changing");
    });
  });
}

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    document.body.classList.toggle("menu-open", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Cerrar menu" : "Abrir menu");
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menu");
    }
  });
}

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => {
    element.classList.add("is-visible");
  });
}

if (form && formStatus) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      formStatus.textContent = "Revisa los campos antes de enviar.";
      return;
    }

    const subject = encodeURIComponent(`Contacto portfolio - ${name}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`
    );

    formStatus.textContent = "Abriendo tu cliente de correo...";
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    form.reset();
  });
}
