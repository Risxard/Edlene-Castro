<div className="social-links">
<a href={`https://www.instagram.com/`} target="_blank">
  <FontAwesomeIcon icon={faInstagram} />
</a>
<a
  href={`https://wa.me/15551234567?text=Tenho%20interesse`}
  target="_blank"
>
  <FontAwesomeIcon icon={faWhatsapp} />
</a>
<a href={`https://www.tiktok.com/`} target="_blank">
  <FontAwesomeIcon icon={faTiktok} />
</a>
<a href={`https://www.youtube.com/`} target="_blank">
  <FontAwesomeIcon icon={faYoutube} />
</a>
<a href={`https://www.linkedin.com/`} target="_blank">
  <FontAwesomeIcon icon={faLinkedinIn} />
</a>
<a href={`https://www.facebook.com/`} target="_blank">
  <FontAwesomeIcon icon={faFacebookF} />
</a>
</div>

<form method="post" className="contact-form" onSubmit={handleSubmit}>
<div className="row">
  <div className="form-name">
    <div className="form-inner">
      <label htmlFor="name">{``}</label>
      <div className="input-group">
        <input
          type="text"
          id="name"
          placeholder={`nome`}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
    </div>
  </div>
</div>

<div className="form-email">
  <div className="form-inner">
    <label htmlFor="email" required>
      {``}
    </label>
    <div className="input-group">
      <input
        type="text"
        id="email"
        placeholder={`email`}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>
  </div>
</div>
<div className="form-age">
  <div className="form-inner">
    <label htmlFor="age">{``}</label>
    <div className="input-group">
      <input
        type="number"
        id="age"
        placeholder={`idade`}
        onChange={(e) => setAge(e.target.value)}
        required
      />
    </div>
  </div>
</div>

<div className="form-text-area">
  <div className="form-inner">
    <label htmlFor="message">{``}</label>
    <div className="input-group">
      <textarea
        required
        placeholder={`mensagem`}
        id="message"
        name="message"
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  </div>
</div>
{/* <input className="submit-button" type="submit" /> */}
</form>