import Account from '~/app/account/Account'
import Contracts from '~/app/contracts/Contracts'
import Doubts from '~/app/doubts/Doubts'
import Home from '~/app/home/Home'

export default [
  { name: 'name', component: Home, icon: 'home-outline', label: 'Início' },
  { name: 'contracts', component: Contracts, icon: 'file-multiple-outline', label: 'Contratos' },
  { name: 'doubts', component: Doubts, icon: 'help-circle-outline', label: 'Dúvidas' },
  { name: 'account', component: Account, icon: 'account-outline', label: 'Conta' }
]