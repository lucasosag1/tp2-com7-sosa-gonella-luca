const Contact = () => {
  const abrirMail = () => {
  window.open('https://mail.google.com/mail/?view=cm&fs=1&to=sosagonella@gmail.com', '_blank');
};

  const abrirGithub = () => {
    window.open('https://github.com/lucasosag1', '_blank');
  };

  return (
    <div>
      <h1>Contacto</h1>
      <p>¿Querés contactarme? Podés escribirme por acá:</p>
      <button onClick={abrirMail}>Enviar mail</button>
      <button onClick={abrirGithub}>Ver mi GitHub</button>
    </div>
  );
};

export default Contact;