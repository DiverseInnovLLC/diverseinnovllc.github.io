const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav-links');
if(menuBtn&&nav){menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));});}

// Services selector
const serviceOptions=[...document.querySelectorAll('.service-option')];
const serviceCount=document.getElementById('service-count');
const serviceSummary=document.getElementById('service-summary');
const serviceContactBtn=document.getElementById('service-contact-btn');
if(serviceOptions.length){
  const selected=new Set();
  const updateServices=()=>{
    const values=[...selected];
    serviceCount.textContent=values.length ? `${values.length} service${values.length===1?'':'s'} selected` : 'No services selected yet';
    serviceSummary.textContent=values.length ? values.join(' • ') : 'Choose one or more services above, then continue to the contact page.';
    serviceContactBtn.href=values.length ? `contact.html?services=${encodeURIComponent(values.join('|'))}` : 'contact.html';
  };
  serviceOptions.forEach(option=>option.addEventListener('click',()=>{
    const value=option.dataset.service;
    const active=option.classList.toggle('selected');
    option.setAttribute('aria-pressed',String(active));
    const badge=option.querySelector('.service-check');
    if(badge) badge.textContent=active?'Selected':'Select';
    active?selected.add(value):selected.delete(value);
    updateServices();
  }));
  updateServices();
}

// Carry selected services into Contact page
const params=new URLSearchParams(window.location.search);
const rawServices=params.get('services');
if(rawServices){
  const services=rawServices.split('|').map(s=>s.trim()).filter(Boolean);
  const wrap=document.getElementById('selected-services-contact');
  const text=document.getElementById('selected-services-text');
  const details=document.getElementById('details');
  const need=document.getElementById('need');
  if(wrap&&text&&services.length){
    wrap.hidden=false;
    text.textContent=services.join(' • ');
  }
  if(details&&services.length&&!details.value){
    details.value=`Services I am interested in: ${services.join(', ')}.

`;
  }
  if(need&&services.length){
    const s=services.join(' ').toLowerCase();
    if(s.includes('home mining')) need.value='New home mining setup';
    else if(s.includes('small-business')||s.includes('small business')) need.value='Small-business mining setup';
    else if(s.includes('equipment')) need.value='Equipment selection / acquisition';
    else if(s.includes('remote support')||s.includes('on-site support')||s.includes('optimization')) need.value='Troubleshooting / support';
    else if(s.includes('expansion')) need.value='Expansion / adding miners';
  }
}

// Honest static-form fallback
const projectForm=document.getElementById('project-form');
if(projectForm){
  projectForm.addEventListener('submit',(e)=>{
    const action=(projectForm.getAttribute('action')||'').trim();
    if(!action||action==='#'){
      e.preventDefault();
      const notice=document.getElementById('form-notice');
      if(notice){notice.textContent='Online submission is not connected yet. Please call Diverse Innov at 775-444-2327 so your inquiry is not lost.';}
    }
  });
}
