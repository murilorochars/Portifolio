import styles from "./EntreContato.module.css";

const EntreContato = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contactInfo}>
          <h2 className={styles.title}>Vamos trabalhar juntos</h2>
          <p className={styles.subtitle}>
            Entre em contato para projetos, oportunidades ou apenas para bater
            um papo
          </p>

          <a
            href="https://api.whatsapp.com/send?phone=5521971602369&text=Fala,%20Lucyan!%20Vim%20do%20teu%20portifólio,%20quero%20trabalhar%20contigo!"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            <WhatsAppIcon />
            Enviar mensagem
          </a>
        </div>

        <div className={styles.formContainer}>
          <h3 className={styles.formTitle}>Mande uma mensagem por email</h3>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <input
                type="text"
                id="name"
                className={styles.input}
                placeholder=" "
                required
              />
              <label htmlFor="name" className={styles.label}>
                Seu nome
              </label>
            </div>

            <div className={styles.formGroup}>
              <input
                type="email"
                id="email"
                className={styles.input}
                placeholder=" "
                required
              />
              <label htmlFor="email" className={styles.label}>
                Seu e-mail
              </label>
            </div>

            <div className={styles.formGroup}>
              <textarea
                id="message"
                className={styles.textarea}
                rows={4}
                placeholder=" "
                required
              />
              <label htmlFor="message" className={styles.label}>
                Sua mensagem
              </label>
            </div>

            <button type="submit" className={styles.submitButton}>
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path
      d="M16.6 14.0001C16.4 13.9001 15.1 13.3001 14.9 13.2001C14.7 13.1001 14.5 13.1001 14.3 13.3001C14.1 13.5001 13.7 14.1001 13.5 14.3001C13.4 14.5001 13.2 14.5001 13 14.4001C12.3 14.1001 11.6 13.7001 11 13.2001C10.5 12.7001 10 12.1001 9.6 11.5001C9.5 11.3001 9.6 11.1001 9.7 11.0001C9.8 10.9001 9.9 10.7001 10.1 10.6001C10.2 10.5001 10.3 10.3001 10.3 10.2001C10.4 10.1001 10.4 9.9001 10.3 9.8001C10.2 9.7001 9.7 8.5001 9.5 8.0001C9.4 7.3001 9.2 7.3001 9 7.3001C8.9 7.3001 8.7 7.3001 8.5 7.3001C8.3 7.3001 8 7.5001 7.9 7.6001C7.3 8.2001 7 8.9001 7 9.7001C7.1 10.6001 7.4 11.5001 8 12.3001C9.1 13.9001 10.5 15.2001 12.2 16.0001C12.7 16.2001 13.1 16.4001 13.6 16.5001C14.1 16.7001 14.6 16.7001 15.2 16.6001C15.9 16.5001 16.5 16.0001 16.9 15.4001C17.1 15.0001 17.1 14.6001 17 14.2001C17 14.2001 16.8 14.1001 16.6 14.0001ZM19.1 4.9001C15.2 1.0001 8.9 1.0001 5 4.9001C1.8 8.1001 1.2 13.0001 3.4 16.9001L2 22.0001L7.3 20.6001C8.8 21.4001 10.4 21.8001 12 21.8001C17.5 21.8001 21.9 17.4001 21.9 11.9001C22 9.3001 20.9 6.8001 19.1 4.9001Z"
      fill="currentColor"
    />
  </svg>
);

export default EntreContato;
