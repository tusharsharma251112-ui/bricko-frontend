// import { paths } from '@/paths';

export const layoutConfig = {
  navItems: [
    {
      // key: 'dashboards',
      // title: 'Dashboards',
      items: [
        { key: 'dashbord', title: 'Dashbord', href: '#', icon: 'house' },
        { key: 'tasks', title: 'Tasks', href: '/task', icon: 'chart-pie' },
        { key: 'requests', title: 'Requests', href: '/requests', icon: 'cube' },
        { key: 'projects', title: 'Projects', href: '/project', icon: 'builders' },
        { key: 'files', title: 'Files', href: '/file', icon: 'files' },
        { key: 'messages', title: 'Messages', href: '#', icon: 'messages' },
        { key: 'contatcts', title: 'Contacts', href: '/contacts', icon: 'contact' },
        // { key: 'settings', title: 'Settings', href: '/settings/profile', icon: 'gear' },
      ],
    },
    {
      key: 'management',
      title: 'Management',
      items: [
        {
          key: 'material',
          title: 'Material',
          icon: 'emplyee',
          items: [
            { key: 'inventory', title: 'Inventory', href: '/material/inventory' },
            { key: 'indent', title: 'Indent / MR', href: '/material/indent' },
            { key: 'purchase_orders', title: 'Purchase Orders', href: '/material/purchase-orders' },
            { key: 'stock_adjustments', title: 'Stock Adjustments', href: '/material/stock-adjustments' },
            // { key: 'po', title: 'PO', href: '/material/po' },
            { key: 'equipment', title: 'Equipment Management', href: '/material/equipment' },
            // { key: 'goods_receipt_note', title: 'Goods Receipt Note', href: '/material/goods-receipt-note' },
          ],
        },
        {
          key: 'sitework',
          title: 'Site Work',
          icon: 'shopping-bag-open',
          items: [
            { key: 'products:boq', title: 'Bill of Quantity (BOQ)', href: '/bill-of-quantity' },
            { key: 'work_order', title: 'Work Order', href: '/work-order' },
            { key: 'wbs', title: 'WBS', href: '/wbs' },
            // { key: 'products', title: 'List products', href: '#' },
            // { key: 'products:create', title: 'Create product', href: '#' },
            // { key: 'products:details', title: 'Product details', href: '#' },
          ],
        },
        {
          key: 'sales_management',
          title: 'Sales Management',
          icon: 'user-four',
          items: [
            { key: 'request_quotations', title: 'Request for Quotations', href: '#' },
            { key: 'quotations', title: 'Quotations', href: '#' },
            { key: 'orders', title: 'Orders', href: '#' },
            { key: 'catalogues', title: 'Catalogues', href: '#' },
            { key: 'promotions', title: 'Promotions', href: '#' },
          ],
        },
        {
          key: 'crm',
          title: 'Sales & CRM',
          icon: 'handshake',
          items: [
            { key: 'leads', title: 'Leads', href: '/leads' },
            { key: 'orders:create', title: 'Sold-Unsold', href: '#' },
            { key: 'customers', title: 'Customers', href: '#' },
          ],
        },
        {
          key: 'legal',
          title: 'Legal',
          icon: 'gavel',
          items: [
            { key: 'court_cases', title: 'Court Cases', href: '#' },
            { key: 'land', title: 'Land', href: '#' },
            { key: 'sanctions', title: 'Sanctions', href: '#' },
          ],
        },
        {
          key: 'employees',
          title: 'Employees',
          icon: 'emplyee',
          items: [
            { key: 'management', title: 'Employees', href: '/management/employees' },
            { key: 'attendance', title: 'Attendance', href: '#' },
            { key: 'payroll', title: 'Payroll', href: '#' },
          ],
        },
        {
          key: 'finance',
          title: 'Finance & Accounting',
          icon: 'rupee',
          items: [
            { key: 'accounts', title: 'All accounts', href: '/finance-accounting/all-accounts' },
            { key: 'invoices', title: 'Invoices', href: '/finance-accounting/invoices' },
            { key: 'payments', title: 'Payment Received', href: '/finance-accounting/payment-received' },
            { key: 'expenses', title: 'Expenses', href: '/finance-accounting/expenses' },
            { key: 'budgets', title: 'Budgets', href: '/finance-accounting/budgets' },
            { key: 'creditNotes', title: 'Credit Notes', href: '/finance-accounting/credit-notes' },
            { key: 'challan', title: 'Delivery challan', href: '/finance-accounting/delivery-challan' },
            { key: 'reconciliation', title: 'Reconciliation', href: '/finance-accounting/reconciliation' },
            { key: 'loans', title: 'Loans & Finance', href: '/finance-accounting/loans' },
            { key: 'journals', title: 'Manual journals', href: '/finance-accounting/manual-journals' },
            { key: 'eWayBills', title: 'E-way Bills', href: '/finance-accounting/e-way-bills' },
            // { key: 'quotations', title: 'Quotations', href: '/finance-accounting/quotations' },
            // { key: 'chequeManagement', title: 'Cheque Management', href: '/finance-accounting/cheque-management' },
            // { key: 'audit', title: 'Audit', href: '/finance-accounting/audit' },
          ],
        },
        // {
        //   key: 'reports',
        //   title: 'Reports',
        //   icon: 'truck',
        //   items: [
        //     { key: 'logistics:metrics', title: 'Metrics', href: '#' },
        //     { key: 'logistics:fleet', title: 'Fleet', href: '#' },
        //   ],
        // },

        { key: 'reports', title: 'Reports', href: '#', icon: 'truck' },
      ],
    },
  ],
};
