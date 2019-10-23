const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],
  deposit(amount) {
    const transaction = {
      amount,
      type: Transaction.DEPOSIT,
      id: this.transactions.length,
    };

    this.addTransaction(transaction);
    return this.balance += amount;
  },
  withdraw(amount) {
    
    if (amount <= this.balance) {
      const transaction = {
        amount,
        type: Transaction.WITHDRAW,
        id: this.transactions.length
      };
    
      this.addTransaction(transaction);
      return this.balance -= amount;
      
    } 
      
      alert('Cнятие такой суммы не возможно, недостаточно средств!');
      
    ;
  },
  addTransaction(transaction) {
    this.transactions.push(transaction);
  },
  getBalance() {
    this.balance;
  },
  getTransactionDetails(id) {
    for (const obj of this.transactions) {
      if (id === obj.id) {
        return obj;
      }
    }
  },
  getTransactionTotal(type) {

    let totalAmount = 0;

    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        totalAmount += transaction.amount;
      }
    };
    return totalAmount;
  },
};

// ui

const {
 deposit, withdraw, transaction, totalByType, history, historyHide 
} = {
  deposit: document.querySelector('.deposit'),
  withdraw: document.querySelector('.withdraw'),
  transaction: document.querySelector('.transaction'),
  totalByType: document.querySelector('.total_by_type'),
  history: document.querySelector('.history'),
  historyHide: document.querySelector('.historyHide'),
};

const {
 depositInput, withdrawInput, transactionInput, typeInput
 } = {
  depositInput: document.querySelector('.depositInput'),
  withdrawInput: document.querySelector('.withdrawInput'),
  transactionInput: document.querySelector('.transactionInput'),
  typeInput: document.querySelector('.typeInput'),
};

deposit.addEventListener('click', () => {
  const num = depositInput.valueAsNumber;
  if (!isNaN(num)) {
    account.deposit(num);
    document.querySelector('.balance').textContent = `Your balance: ${account.balance} $`;
  } else {
    alert('Введите число!');
  }
});

withdraw.addEventListener('click', () => {
  const num = withdrawInput.valueAsNumber;
  if (!isNaN(num)) {
    account.withdraw(num);
    document.querySelector('.balance').textContent = `Your balance: ${account.balance} $`;
  } else {
    alert('Введите число!');
  }
});

transaction.addEventListener('click', () => {
  const num = transactionInput.valueAsNumber;
  const obj = account.getTransactionDetails(num);
  const elem = document.querySelector('.bytype');
  const p = elem.querySelector('p');
  const date = new Date();

  if (p) {
    const ps = elem.querySelectorAll('p');
    for (const item of ps) {
      item.remove();
    }
  }
  
  if (obj !== undefined) {

    const arr = Object.entries(obj);

    for (const [name, value] of arr) {
      elem.insertAdjacentHTML('beforeend', `<p style="padding-top: 10px;"><b>${name}: </b>${value}</p>`);
    }
    
    elem.insertAdjacentHTML('beforeend', `<p style="padding-top: 10px;"><b>Дата операции: </b>${date}</p>`);

  } else {
    alert('Такого id нету');
  }
});

totalByType.addEventListener('click', () => {
  const {
 type, elem, p, date 
} = {
    type: typeInput.value,
    elem: document.querySelector('.bytype'),
    p: document.querySelector('.bytype').querySelector('p'),
    date: new Date(),
  };

  if (p) {
    const ps = elem.querySelectorAll('p');
    for (const item of ps) {
      item.remove();
    }
  }
  
  if (type === Transaction.DEPOSIT) {
    elem.insertAdjacentHTML('beforeend',
      `<p style="padding-top: 10px;"><b>Deposit: </b>${account.getTransactionTotal(type)}</p>`,
    );
  } else {
    elem.insertAdjacentHTML('beforeend',
      `<p style="padding-top: 10px;"><b>Withdraw: </b>${account.getTransactionTotal(type)}</p>`,
    );
  }
});

history.addEventListener('click', () => {
  const {
 historyArray, el, rowsCount, rows, date
 } = {
    historyArray: account.transactions,
    el: document.querySelector('.tbody'),
    rowsCount: document.querySelector('.tbody').childElementCount,
    rows: document.querySelector('.tbody').querySelectorAll('tr'),
    date: new Date(),
  };

  if (rowsCount !== (historyArray.length + 2)) {

    for (const item of rows) {
      el.removeChild(item);
    }
    
    el.insertAdjacentHTML('afterbegin',
      `<tr>
        <th>ID</th>
        <th>Amount</th>
        <th>Type</th>
        <th>Date</th>
      </tr>`,
    );

    for (const item of historyArray) {
      const table = `
        <tr>
          <td>${item.id}</td>
          <td>${item.amount}</td>
          <td>${item.type}</td>
          <td>${date}</td>
        </tr>`;
      el.insertAdjacentHTML('beforeend', table);
    }

    el.insertAdjacentHTML('beforeend',
      `<tr class="end">
        <td><b>Всего</b></td>
        <td><b>${account.balance}</b></td>
        <td> </td>
        <td> </td>
      </tr>`,
    );
  }
});

historyHide.addEventListener('click', () => {
  const { el, rows } = {
    el: document.querySelector('.tbody'),
    rows: document.querySelector('.tbody').querySelectorAll('tr'),
  };

  for (const item of rows) {
    item.remove();
  }
  
  el.insertAdjacentHTML('afterbegin',
    `<tr>
        <th>ID</th>
        <th>Amount</th>
        <th>Type</th>
        <th>Date</th>
      </tr>`,
  );
});
