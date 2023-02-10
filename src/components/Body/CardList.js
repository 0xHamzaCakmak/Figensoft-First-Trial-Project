import React from "react";
import styled from "styled-components";
import plug from "../../Assets/icon-plug.png";
import shopping from "../../Assets/icon-shopping.png";
import setting from "../../Assets/icon-setting.png";
import notprofile from "../../Assets/icon-not-profile.png";
import "../Body/Homepage.css";

const CardAccount = () => {
  return (
    <div className="CardAccount">
      <img className="card-account-img" src={notprofile}></img>
      <div className="card-firma-adi">Posta Güvercini Ltd. Şti.</div>
      <div className="card-user-name">User Ad Soyad</div>
      <div>
        <button className="btn-account">
          <img className="icon-account" src={plug}></img>
          Partnership
        </button>
      </div>
      <div>
        <button className="btn-account">
          <img className="icon-account" src={setting}></img>
          Account Settings
        </button>
      </div>
    </div>
  );
};
const CardLoginLog = () => {
  return (
    <div className="card-login-log">
      <div>Last Successful Login</div>
      <div>Time 10.02.2023 15:40</div> {/* Login olduğu zamanı ekle*/}
      <div>Last Failed Login</div>
      <div> - yada Time</div>{" "}
      {/* girişte hata yapmışsa tarihi logdan cek ekle */}
    </div>
  );
};
const CardTechnology = () => {
  return (
    <div className="card-technology">
      <div>Technology for you</div>
      <div>
        Figensoft offers worldwide services thanks to its international offices
        and global businnes partnerships with its messaging services and payment
        systems.
      </div>
    </div>
  );
};
const CardMessage = () => {
  return (
    <div className="card-message-blog">
      <div className="card-message-text">
        <p>
          According to the law No. 6563, which entered into force as of May 1,
          2015, it is the legal cell of commercial purpose expectations to give
          the right to refuse to send a message in each commercial electroniic
          message. Those who do this can be fined between 2.000 and 15.000
          liras.(article 12, paragraph 1, subpargraph c)
        </p>
      </div>
    </div>
  );
};
{
  /* Benzer  şekilde 10 Farklı hizmet Card. Databaseden Çekilebilir Array 
    Hizmet ürünü sepete eklenmiş ise Sepet butonu gizle*/
}
const CardBulkSMS = () => {
  return (
    <div className="products">
      <div className="product-sms">
        <img src=""></img>
        <div>Bulk SMS</div>
        <div>Reach your audiences by sending SMS</div>
        <button className="btn-shopping">
          <img src={shopping}></img>
        </button>
      </div>
    </div>
  );
};
const CardContacts = () => {
  return (
    <div className="products">
      <img src=""></img>
      <div>Contacts</div>
      <div>Easily manage your contacts</div>
      <button className="btn-shopping">
        <img src={shopping}></img>
      </button>
    </div>
  );
};
const CardEmail = () => {
  return (
    <div className="products">
      <img src=""></img>
      <div>Email</div>
      <div>Send your bulk e-mails quickly</div>
      <button className="btn-shopping">
        <img src={shopping}></img>
      </button>
    </div>
  );
};
const CardMMS = () => {
  return (
    <div className="products">
      <img src=""></img>
      <div>MMS</div>
      <div>Easily send multimedia messages to your customers</div>
      <button className="btn-shopping">
        <img src={shopping}></img>
      </button>
    </div>
  );
};
const CardIntegration = () => {
  return (
    <div className="products">
      <img src=""></img>
      <div>Integration</div>
      <div>Integrate your systems with our comprehensive APIs</div>
      <button className="btn-shopping">
        <img src={shopping}></img>
      </button>
    </div>
  );
};
const CardConsentManagement = () => {
  return (
    <div className="products">
      <div className="product-management">
        <img src=""></img>
        <div>Consent Management</div>
        <div>Manage your KVVK ETK consents</div>
        <button className="btn-shopping">
          <img src={shopping}></img>
        </button>
      </div>
    </div>
  );
};
const CardOnlineConsent = () => {
  return (
    <div className="products">
      <img src=""></img>
      <div>Online Consent</div>
      <div>Collect consents from your customers electronically</div>
      <button className="btn-shopping">
        <img src={shopping}></img>
      </button>
    </div>
  );
};
const CardSurvey = () => {
  return (
    <div className="products">
      <img src=""></img>
      <div>Survey</div>
      <div>Create advanced surveys and collect data</div>
      <button className="btn-shopping">
        <img src={shopping}></img>
      </button>
    </div>
  );
};
const CardHelpDesk = () => {
  return (
    <div className="products">
      <img src=""></img>
      <div>Help Desk</div>
      <div>Manage your tickets, support your customers easily</div>
      <button className="btn-shopping">
        <img src={shopping}></img>
      </button>
    </div>
  );
};
const CardKnowledgeBase = () => {
  return (
    <div className="products">
      <img src=""></img>
      <div>Knowledge Base</div>
      <div>Gather your information system on a single solution</div>
      <button className="btn-shopping">
        <img src={shopping}></img>
      </button>
    </div>
  );
};

export const CardList = () => {
  return (
    <div className="card-list-body">
      <div className="card-sidebar">
        <CardAccount />
        <CardLoginLog />
        <CardTechnology />
      </div>
      <div className="card-product-menu">
        <div>
          <CardMessage />
        </div>
        <div className="card-product-5">
          <CardBulkSMS />
          <CardContacts />
          <CardEmail />
          <CardMMS />
          <CardIntegration />
        </div>
        <div className="card-product-10">
          <CardConsentManagement />
          <CardOnlineConsent />
          <CardSurvey />
          <CardHelpDesk />
          <CardKnowledgeBase />
        </div>
      </div>
    </div>
  );
};
