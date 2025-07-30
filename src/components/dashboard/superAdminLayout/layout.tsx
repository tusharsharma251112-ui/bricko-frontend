

// import * as React from 'react';
// import { VerticalLayout } from './VerticalLayout';

// // import { useSettings } from '@/hooks/use-settings';

// // import { HorizontalLayout } from './horizontal/horizontal-layout';
// // import { VerticalLayout } from './vertical/vertical-layout';

// interface DynamicLayoutProps {
//   children: React.ReactNode;
// }

// export function SuperAdminLayout({ children }: DynamicLayoutProps): JSX.Element {
//   return <VerticalLayout>{children}</VerticalLayout>;
// }
import React, { useState } from 'react';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Button,
  IconButton,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  InputAdornment,
  Badge,
  Menu,
  MenuItem,
  Divider,
  Card,
  CardContent,
  Stack,
  Select,
  FormControl,
  InputLabel,
  Pagination,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  HelpRounded,
  People,
  Business,
  Settings,
  Search,
  Add,
  FileDownload,
  FilterList,
  MoreVert,
  AccountCircle,
  Notifications,
  Home,
  Group,
  Work,
} from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';         // ChevronDown
import DownloadIcon from '@mui/icons-material/Download';             // Download
import AddIcon from '@mui/icons-material/Add';                       // Plus
import MoreVertIcon from '@mui/icons-material/MoreVert';             // MoreVertical
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';       // ChevronLeft
import ChevronRightIcon from '@mui/icons-material/ChevronRight';     // ChevronRight
import HomeIcon from '@mui/icons-material/Home';                     // Home
import LocalOfferIcon from '@mui/icons-material/LocalOffer';         // Tag
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'; // Circle
import VisibilityIcon from '@mui/icons-material/Visibility';         // Eye
import EditIcon from '@mui/icons-material/Edit';                     // Edit
import DeleteIcon from '@mui/icons-material/Delete';    


// Sample Data


// Navbar Component
// const Navbar: React.FC<{ onMenuClick: () => void }> = ({ onMenuClick }) => {
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <AppBar 
//       position="fixed" 
//       sx={{ 
//         zIndex: theme.zIndex.drawer + 1,
//         bgcolor: 'white',
//         color: 'black',
//         boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
//         ml: isMobile ? 0 : `${drawerWidth}px`,
//         width: isMobile ? '100%' : `calc(100% - ${drawerWidth}px)`
//       }}
//     >
//       <Toolbar sx={{ justifyContent: 'space-between' }}>
//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//           {isMobile && (
//             <IconButton onClick={onMenuClick} sx={{ color: 'black' }}>
//               <Settings />
//             </IconButton>
//           )}
//           <Typography variant="h6" sx={{ fontWeight: 600, color: 'black' }}>
//             Dashboard &gt; Builders
//           </Typography>
//         </Box>

//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//           <TextField
//             placeholder="Search..."
//             size="small"
//             sx={{ 
//               minWidth: 250,
//               display: { xs: 'none', sm: 'block' },
//               '& .MuiOutlinedInput-root': {
//                 bgcolor: '#f5f5f5',
//                 '& fieldset': { border: 'none' },
//               }
//             }}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <Search sx={{ color: 'grey.500' }} />
//                 </InputAdornment>
//               ),
//             }}
//           />
          
//           <IconButton>
//             <Badge badgeContent={4} color="error">
//               <Notifications />
//             </Badge>
//           </IconButton>

//           <IconButton onClick={handleMenu}>
//             <Avatar sx={{ width: 32, height: 32 }}>RJ</Avatar>
//           </IconButton>

//           <Menu
//             anchorEl={anchorEl}
//             open={Boolean(anchorEl)}
//             onClose={handleClose}
//           >
//             <MenuItem onClick={handleClose}>Profile</MenuItem>
//             <MenuItem onClick={handleClose}>Settings</MenuItem>
//             <Divider />
//             <MenuItem onClick={handleClose}>Logout</MenuItem>
//           </Menu>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// // Main Content Component
// const MainContent: React.FC = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [statusFilter, setStatusFilter] = useState('');
//   const [page, setPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

//   const filteredBuilders = sampleBuilders.filter(builder => {
//     return (
//       builder.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       builder.admin.name.toLowerCase().includes(searchTerm.toLowerCase())
//     ) && (statusFilter === '' || builder.status === statusFilter);
//   });

//   return (
//     <Box sx={{ p: 3 }}>
//       {/* Header */}
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
//         <Typography variant="h4" sx={{ fontWeight: 600 }}>
//           Builders
//         </Typography>
//         <Box sx={{ display: 'flex', gap: 2 }}>
//           <Button
//             variant="outlined"
//             startIcon={<FileDownload />}
//             sx={{ textTransform: 'none' }}
//           >
//             Export
//           </Button>
//           <Button
//             variant="contained"
//             startIcon={<Add />}
//             sx={{ 
//               textTransform: 'none',
//               bgcolor: '#1976d2',
//               '&:hover': { bgcolor: '#1565c0' }
//             }}
//           >
//             Add
//           </Button>
//         </Box>
//       </Box>

//       {/* Filters */}
//       <Card sx={{ mb: 3 }}>
//         <CardContent>
//           <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
//             <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
//               <Chip label="Vendor 5" variant="outlined" />
//               <Chip label="Brands 5" variant="outlined" />
//             </Box>
            
//             <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flex: 1 }}>
//               <Button
//                 variant="outlined"
//                 startIcon={<Home />}
//                 size="small"
//                 sx={{ textTransform: 'none' }}
//               >
//                 City
//               </Button>
//               <Button
//                 variant="outlined"
//                 startIcon={<Group />}
//                 size="small"
//                 sx={{ textTransform: 'none' }}
//               >
//                 Brands
//               </Button>
//               <Button
//                 variant="outlined"
//                 startIcon={<Work />}
//                 size="small"
//                 sx={{ textTransform: 'none' }}
//               >
//                 Status
//               </Button>
//               <Button
//                 variant="text"
//                 size="small"
//                 sx={{ textTransform: 'none', color: '#1976d2' }}
//               >
//                 Clear filters
//               </Button>
//             </Box>

//             <TextField
//               placeholder="Search..."
//               size="small"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               InputProps={{
//                 startAdornment: (
//                   <InputAdornment position="start">
//                     <Search sx={{ color: 'grey.500' }} />
//                   </InputAdornment>
//                 ),
//               }}
//             />
//           </Stack>
//         </CardContent>
//       </Card>

//       {/* Data Table */}
//       <TableContainer component={Paper} sx={{ mb: 3 }}>
//         <Table>
//           <TableHead>
//             <TableRow sx={{ bgcolor: '#f5f5f5' }}>
//               <TableCell sx={{ fontWeight: 600 }}>Company</TableCell>
//               <TableCell sx={{ fontWeight: 600 }}>Admin</TableCell>
//               <TableCell sx={{ fontWeight: 600 }}>Badges</TableCell>
//               <TableCell sx={{ fontWeight: 600 }}>Phone number</TableCell>
//               <TableCell sx={{ fontWeight: 600 }}>Projects</TableCell>
//               <TableCell sx={{ fontWeight: 600 }}>Status</TableCell>
//               <TableCell sx={{ fontWeight: 600, textAlign: 'center' }}>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredBuilders.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((builder) => (
//               <TableRow key={builder.id} hover>
//                 <TableCell>
//                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                     <Box sx={{
//                       width: 40,
//                       height: 40,
//                       bgcolor: '#ff6b35',
//                       borderRadius: 1,
//                       display: 'flex',
//                       alignItems: 'center',
//                       justifyContent: 'center',
//                       color: 'white',
//                       fontWeight: 'bold'
//                     }}>
//                       {builder.company.charAt(0)}
//                     </Box>
//                     <Box>
//                       <Typography variant="body2" sx={{ fontWeight: 600 }}>
//                         {builder.company}
//                       </Typography>
//                       <Typography variant="caption" color="text.secondary">
//                         Address, City
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </TableCell>
//                 <TableCell>
//                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//                     <Avatar sx={{ width: 32, height: 32 }}>
//                       {builder.admin.name.split(' ').map(n => n[0]).join('')}
//                     </Avatar>
//                     <Box>
//                       <Typography variant="body2" sx={{ fontWeight: 600 }}>
//                         {builder.admin.name}
//                       </Typography>
//                       <Typography variant="caption" color="text.secondary">
//                         {builder.admin.email}
//                       </Typography>
//                     </Box>
//                   </Box>
//                 </TableCell>
//                 <TableCell>
//                   <Box sx={{ display: 'flex', gap: 0.5 }}>
//                     {builder.badges.map((badge, index) => (
//                       <Avatar
//                         key={index}
//                         sx={{
//                           width: 24,
//                           height: 24,
//                           bgcolor: '#1976d2',
//                           fontSize: '12px'
//                         }}
//                       >
//                         {badge}
//                       </Avatar>
//                     ))}
//                     <Chip label="+5" size="small" sx={{ fontSize: '10px' }} />
//                   </Box>
//                 </TableCell>
//                 <TableCell>
//                   <Typography variant="body2">
//                     {builder.phoneNumber}
//                   </Typography>
//                 </TableCell>
//                 <TableCell>
//                   <Box sx={{ display: 'flex', gap: 0.5 }}>
//                     {builder.projects.map((project, index) => (
//                       <Avatar
//                         key={index}
//                         sx={{
//                           width: 24,
//                           height: 24,
//                           bgcolor: '#1976d2',
//                           fontSize: '12px'
//                         }}
//                       >
//                         {project}
//                       </Avatar>
//                     ))}
//                     <Chip label="+5" size="small" sx={{ fontSize: '10px' }} />
//                   </Box>
//                 </TableCell>
//                 <TableCell>
//                   <Chip
//                     label={builder.status}
//                     size="small"
//                     color={builder.status === 'Active' ? 'success' : 'default'}
//                     sx={{ fontWeight: 500 }}
//                   />
//                 </TableCell>
//                 <TableCell align="center">
//                   <IconButton size="small">
//                     <MoreVert />
//                   </IconButton>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>

//       {/* Pagination */}
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <Typography variant="body2" color="text.secondary">
//           Rows per page: {rowsPerPage} | 1-5 of 13
//         </Typography>
//         <Pagination
//           count={Math.ceil(filteredBuilders.length / rowsPerPage)}
//           page={page}
//           onChange={(_, newPage) => setPage(newPage)}
//           color="primary"
//         />
//       </Box>
//     </Box>
//   );
// };

// Main Dashboard Layout
const Dashboard: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#fafafa' }}>
      {/* <Sidebar open={mobileOpen} onClose={handleDrawerToggle} /> */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* <Navbar onMenuClick={handleDrawerToggle} /> */}
        <Box 
          component="main" 
          sx={{ 
            flexGrow: 1,
            pt: 2,
            pl: { xs: 0, md: 0 }
          }}
        >
            <BuildersTable/>
          {/* <MainContent /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;


// import React, { useState } from 'react';

             // Trash2


// Types
interface Builder {
  id: string;
  company: string;
  address: string;
  admin: {
    name: string;
    email: string;
    avatar: string;
  };
  badges: Array<{ id: string; label: string; color: string }>;
  phoneNumber: string;
  projects: Array<{ id: string; label: string; color: string }>;
  status: 'Active' | 'Inactive';
}

interface BuildersTableProps {
  data?: Builder[];
  onExport?: () => void;
  onAdd?: () => void;
  onRowAction?: (builderId: string, action: string) => void;
}

// Sample Data
const sampleBuilders: Builder[] = Array.from({ length: 13 }, (_, index) => ({
  id: `builder-${index + 1}`,
  company: 'Company Name pvt. ltd.',
  address: 'Address, city',
  admin: {
    name: 'Carson Darrin',
    email: 'carson.darrin@bricko.in',
    avatar: 'CD'
  },
  badges: [
    { id: '1', label: 'B', color: '#2196F3' },
    { id: '2', label: 'B', color: '#2196F3' },
    { id: '3', label: 'B', color: '#2196F3' },
    { id: '4', label: 'B', color: '#2196F3' },
  ],
  phoneNumber: '+91 8288179520',
  projects: [
    { id: '1', label: 'P', color: '#2196F3' },
    { id: '2', label: 'P', color: '#2196F3' },
    { id: '3', label: 'P', color: '#2196F3' },
    { id: '4', label: 'P', color: '#2196F3' },
  ],
  status: 'Active' as const
}));

const BuildersTable: React.FC<BuildersTableProps> = ({
  data = sampleBuilders,
  onExport,
  onAdd,
  onRowAction
}) => {
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [showMenu, setShowMenu] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    vendor: 5,
    brands: 5,
    city: '',
    badges: '',
    status: ''
  });

  // Filter and paginate data
  const filteredData = data.filter(builder => 
    builder.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    builder.admin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedData = filteredData.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage + 1;
  const endIndex = Math.min(page * rowsPerPage, filteredData.length);

  const handleExport = () => {
    onExport?.();
  };

  const handleAdd = () => {
    onAdd?.();
  };

  const handleMenuToggle = (builderId: string) => {
    setShowMenu(showMenu === builderId ? null : builderId);
  };

  const handleRowAction = (builderId: string, action: string) => {
    onRowAction?.(builderId, action);
    setShowMenu(null);
  };

  const clearFilters = () => {
    setFilters({
      vendor: 5,
      brands: 5,
      city: '',
      badges: '',
      status: ''
    });
    setSearchTerm('');
  };

  const styles = {
    container: {
      padding: '20px',
      backgroundColor: '#fafafa',
      minHeight: '100vh',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '24px'
    },
    title: {
      fontSize: '32px',
      fontWeight: '600',
      color: '#1a1a1a',
      margin: '0'
    },
    headerActions: {
      display: 'flex',
      gap: '12px'
    },
    button: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 16px',
      borderRadius: '6px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '14px',
      fontWeight: '500',
      transition: 'all 0.2s ease'
    },
    buttonOutlined: {
      backgroundColor: 'white',
      border: '1px solid #d0d7de',
      color: '#24292f'
    },
    buttonPrimary: {
      backgroundColor: '#1976d2',
      color: 'white'
    },
    filtersCard: {
      backgroundColor: 'white',
      borderRadius: '8px',
      padding: '16px 20px',
      marginBottom: '16px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e1e4e8'
    },
    filtersRow: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      flexWrap: 'wrap' as const
    },
    chip: {
      padding: '4px 12px',
      backgroundColor: '#f6f8fa',
      border: '1px solid #d0d7de',
      borderRadius: '16px',
      fontSize: '12px',
      color: '#656d76'
    },
    filterButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '4px',
      padding: '6px 12px',
      backgroundColor: 'white',
      border: '1px solid #d0d7de',
      borderRadius: '6px',
      cursor: 'pointer',
      fontSize: '12px',
      color: '#24292f'
    },
    clearButton: {
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      fontSize: '12px',
      color: '#0969da',
      padding: '6px 8px'
    },
    searchContainer: {
      position: 'relative' as const,
      minWidth: '200px'
    },
    searchInput: {
    //   width: '100%',
      padding: '8px 12px 8px 36px',
      border: '1px solid #d0d7de',
      borderRadius: '6px',
      fontSize: '14px',
      outline: 'none'
    },
    searchIcon: {
      position: 'absolute' as const,
      left: '12px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#656d76'
    },
    tableContainer: {
      backgroundColor: 'white',
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e1e4e8',
      marginBottom: '16px'
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse' as const,
      fontSize: '14px'
    },
    tableHeader: {
      backgroundColor: '#f6f8fa'
    },
    tableHeaderCell: {
      padding: '12px 16px',
      textAlign: 'left' as const,
      fontWeight: '600',
      color: '#24292f',
      borderBottom: '1px solid #d0d7de'
    },
    tableRow: {
      borderBottom: '1px solid #e1e4e8',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease'
    },
    tableCell: {
      padding: '12px 16px',
      verticalAlign: 'middle' as const
    },
    companyCell: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    companyIcon: {
      width: '40px',
      height: '40px',
      backgroundColor: '#ff6b35',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '16px'
    },
    companyInfo: {
      display: 'flex',
      flexDirection: 'column' as const
    },
    companyName: {
      fontWeight: '600',
      color: '#24292f',
      marginBottom: '2px',
      fontSize: '14px'
    },
    companyAddress: {
      fontSize: '12px',
      color: '#656d76'
    },
    adminCell: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    },
    adminAvatar: {
      width: '32px',
      height: '32px',
      backgroundColor: '#2196F3',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '12px'
    },
    adminInfo: {
      display: 'flex',
      flexDirection: 'column' as const
    },
    adminName: {
      fontWeight: '600',
      color: '#24292f',
      marginBottom: '2px',
      fontSize: '14px'
    },
    adminEmail: {
      fontSize: '12px',
      color: '#656d76'
    },
    badgesCell: {
      display: 'flex',
      alignItems: 'center',
      gap: '1px'
    },
    badge: {
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: '10px',
      fontWeight: 'bold'
    },
    plusChip: {
      padding: '2px 6px',
      backgroundColor: '#f6f8fa',
      border: '1px solid #d0d7de',
      borderRadius: '12px',
      fontSize: '10px',
      color: '#656d76',
      marginLeft: '4px'
    },
    statusChip: {
      padding: '4px 8px',
      borderRadius: '16px',
      fontSize: '12px',
      fontWeight: '500'
    },
    statusActive: {
      backgroundColor: '#d1f7c4',
      color: '#0f5132',
      border: '1px solid #b8e6b1'
    },
    statusInactive: {
      backgroundColor: '#f8f9fa',
      color: '#6c757d',
      border: '1px solid #dee2e6'
    },
    menuContainer: {
      position: 'relative' as const
    },
    menuButton: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '8px',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    menu: {
      position: 'absolute' as const,
      top: '100%',
      right: '0',
      backgroundColor: 'white',
      border: '1px solid #d0d7de',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      minWidth: '120px',
      zIndex: 1000
    },
    menuItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 12px',
      cursor: 'pointer',
      fontSize: '14px',
      color: '#24292f',
      borderBottom: '1px solid #f1f3f4'
    },
    pagination: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    paginationInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '14px',
      color: '#656d76'
    },
    select: {
      padding: '4px 8px',
      border: '1px solid #d0d7de',
      borderRadius: '4px',
      fontSize: '14px',
      outline: 'none'
    },
    paginationControls: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    pageButton: {
      padding: '6px 12px',
      border: '1px solid #d0d7de',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px',
      backgroundColor: 'white',
      color: '#24292f'
    },
    pageButtonActive: {
      backgroundColor: '#1976d2',
      color: 'white',
      borderColor: '#1976d2'
    }
  };

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>Builders</h1>
        <div style={styles.headerActions}>
          <button
            onClick={handleExport}
            style={{
              ...styles.button,
              ...styles.buttonOutlined
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f6f8fa';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'white';
            }}
          >
            <DownloadIcon />
            Export
          </button>
          <button
            onClick={handleAdd}
            style={{
              ...styles.button,
              ...styles.buttonPrimary
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1565c0';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1976d2';
            }}
          >
            <AddIcon />
            Add
          </button>
        </div>
      </div>

      {/* Filters Section */}
      <div style={styles.filtersCard}>
        <div style={styles.filtersRow}>
          {/* Filter Chips */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={styles.chip}>
              Vendor {filters.vendor}
            </span>
            <span style={styles.chip}>
              Brands {filters.brands}
            </span>
          </div>

          {/* Filter Buttons */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flex: 1 }}>
            <button style={styles.filterButton}>
              <div style={{ width: '16px', height: '16px', backgroundColor: '#8B5CF6', borderRadius: '2px' }}></div>
              City
            </button>
            <button style={styles.filterButton}>
              <div style={{ width: '16px', height: '16px', backgroundColor: '#10B981', borderRadius: '2px' }}></div>
              Badges
            </button>
            <button style={styles.filterButton}>
              <div style={{ width: '16px', height: '16px', backgroundColor: '#F59E0B', borderRadius: '2px' }}></div>
              Status
            </button>
            <button 
              onClick={clearFilters}
              style={styles.clearButton}
            >
              Clear filters
            </button>
          </div>

          {/* Search */}
          <div style={styles.searchContainer}>
            <Search  style={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={styles.searchInput}
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div style={styles.tableContainer}>
        <table style={styles.table}>
          <thead style={styles.tableHeader}>
            <tr>
              <th style={styles.tableHeaderCell}>Company</th>
              <th style={styles.tableHeaderCell}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Admin
                  <ExpandMoreIcon style={{ color: '#656d76' }} />
                </div>
              </th>
              <th style={styles.tableHeaderCell}>Badges</th>
              <th style={styles.tableHeaderCell}>Phone number</th>
              <th style={styles.tableHeaderCell}>Projects</th>
              <th style={styles.tableHeaderCell}>Status</th>
              <th style={{ ...styles.tableHeaderCell, textAlign: 'center', width: '60px' }}></th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((builder) => (
              <tr 
                key={builder.id}
                style={styles.tableRow}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f6f8fa';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                }}
              >
                <td style={styles.tableCell}>
                  <div style={styles.companyCell}>
                    <div style={styles.companyIcon}>
                      {builder.company.charAt(0)}
                    </div>
                    <div style={styles.companyInfo}>
                      <div style={styles.companyName}>
                        {builder.company}
                      </div>
                      <div style={styles.companyAddress}>
                        {builder.address}
                      </div>
                    </div>
                  </div>
                </td>
                
                <td style={styles.tableCell}>
                  <div style={styles.adminCell}>
                    <div style={styles.adminAvatar}>
                      {builder.admin.avatar}
                    </div>
                    <div style={styles.adminInfo}>
                      <div style={styles.adminName}>
                        {builder.admin.name}
                      </div>
                      <div style={styles.adminEmail}>
                        {builder.admin.email}
                      </div>
                    </div>
                  </div>
                </td>

                <td style={styles.tableCell}>
                  <div style={styles.badgesCell}>
                    {builder.badges.slice(0, 4).map((badge, index) => (
                      <div
                        key={badge.id}
                        style={{
                          ...styles.badge,
                          backgroundColor: badge.color
                        }}
                      >
                        {badge.label}
                      </div>
                    ))}
                    <span style={styles.plusChip}>
                      +3
                    </span>
                  </div>
                </td>

                <td style={styles.tableCell}>
                  {builder.phoneNumber}
                </td>

                <td style={styles.tableCell}>
                  <div style={styles.badgesCell}>
                    {builder.projects.slice(0, 4).map((project, index) => (
                      <div
                        key={project.id}
                        style={{
                          ...styles.badge,
                          backgroundColor: project.color
                        }}
                      >
                        {project.label}
                      </div>
                    ))}
                    <span style={styles.plusChip}>
                      +3
                    </span>
                  </div>
                </td>

                <td style={styles.tableCell}>
                  <span 
                    style={{
                      ...styles.statusChip,
                      ...(builder.status === 'Active' ? styles.statusActive : styles.statusInactive)
                    }}
                  >
                    {builder.status}
                  </span>
                </td>

                <td style={{ ...styles.tableCell, textAlign: 'center' }}>
                  <div style={styles.menuContainer}>
                    <button
                      style={styles.menuButton}
                      onClick={() => handleMenuToggle(builder.id)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#f6f8fa';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      <MoreVertIcon />
                    </button>
                    
                    {showMenu === builder.id && (
                      <div style={styles.menu}>
                        <div 
                          style={styles.menuItem}
                          onClick={() => handleRowAction(builder.id, 'view')}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#f6f8fa';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'white';
                          }}
                        >
                          <VisibilityIcon />
                          View
                        </div>
                        <div 
                          style={styles.menuItem}
                          onClick={() => handleRowAction(builder.id, 'edit')}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#f6f8fa';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'white';
                          }}
                        >
                          <EditIcon/>
                          Edit
                        </div>
                        <div 
                          style={{ ...styles.menuItem, borderBottom: 'none' }}
                          onClick={() => handleRowAction(builder.id, 'delete')}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#f6f8fa';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'white';
                          }}
                        >
                          <DeleteIcon />
                          Delete
                        </div>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div style={styles.pagination}>
        <div style={styles.paginationInfo}>
          <span>Rows per page:</span>
          <select 
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
            style={styles.select}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
          </select>
          <span>{startIndex}-{endIndex} of {filteredData.length}</span>
        </div>
        
        <div style={styles.paginationControls}>
          <button
            style={styles.pageButton}
            onClick={() => setPage(Math.max(1, page - 1))}
            disabled={page === 1}
          >
            <ChevronLeftIcon />
          </button>
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            const pageNum = i + 1;
            return (
              <button
                key={pageNum}
                style={{
                  ...styles.pageButton,
                  ...(page === pageNum ? styles.pageButtonActive : {})
                }}
                onClick={() => setPage(pageNum)}
              >
                {pageNum}
              </button>
            );
          })}
          <button
            style={styles.pageButton}
            onClick={() => setPage(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

// export default BuildersTable;