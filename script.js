// Simple demo logic: localStorage balance and nav actions
const $ = id => document.getElementById(id);
const modal = document.getElementById('modal');
const depositInput = document.getElementById('depositInput');
const balanceAmount = document.getElementById('balanceAmount');

function loadBalance(){
  const b = Number(localStorage.getItem('demo_balance') || 0);
  balanceAmount.innerText = b.toFixed(2);
}
function openModal(){ modal.classList.remove('hidden'); modal.setAttribute('aria-hidden','false'); depositInput.value=''; depositInput.focus(); }
function closeModal(){ modal.classList.add('hidden'); modal.setAttribute('aria-hidden','true'); }

document.getElementById('btnDepositOpen').addEventListener('click', openModal);
document.getElementById('closeModal').addEventListener('click', closeModal);
document.getElementById('confirmDeposit').addEventListener('click', ()=>{
  const v = Number(depositInput.value);
  if(!v || v<=0){ alert('Enter amount > 0'); return; }
  const cur = Number(localStorage.getItem('demo_balance')||0);
  localStorage.setItem('demo_balance', (cur+v).toString());
  loadBalance();
  closeModal();
  alert('Deposited: '+v);
});

document.getElementById('btnWithdraw').addEventListener('click', ()=>{
  const cur = Number(localStorage.getItem('demo_balance')||0);
  if(cur<=0){ alert('No balance to withdraw'); return; }
  const take = prompt('Enter withdraw amount', '0');
  const n = Number(take);
  if(!n || n<=0){ alert('Cancelled'); return; }
  if(n>cur){ alert('Insufficient balance'); return; }
  localStorage.setItem('demo_balance', (cur-n).toString());
  loadBalance();
  alert('Withdrawal done: '+n);
});

// icon clicks
document.querySelectorAll('.icon-btn').forEach(btn=>{
  btn.addEventListener('click', (e)=>{
    const action = e.currentTarget.dataset.action;
    alert('Open: '+action);
  });
});

// bottom nav
document.querySelectorAll('.nav-item').forEach(n=>{
  n.addEventListener('click', ()=>{
    document.querySelectorAll('.nav-item').forEach(x=>x.classList.remove('active'));
    n.classList.add('active');
    alert('Open tab: '+n.dataset.tab);
  });
});

loadBalance();
