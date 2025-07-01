// ** React Imports
import { useState, useEffect } from 'react'

// ** MUI Components
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
// import AvatarGroup from '@mui/material/AvatarGroup'
import { DataGrid } from '@mui/x-data-grid'
import JobPortalStats from 'src/views/pages/dashboard/stats'
//mockData
import mockRows from '../../mockData'
import Modal from './modal'

// ** Third Party Imports
import axios from 'axios'

// ** Custom Components Imports
import OptionsMenu from 'src/@core/components/option-menu'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

// ** renders name column

const Dashboard = () => {
  // ** State
  const [selectedRow, setSelectedRow] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const [data, setData] = useState([])
  const [value, setValue] = useState('')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 5 })
  const handleView = row => {
    setSelectedRow(row)
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
    setSelectedRow(null)
  }
  const handleApprove = row => {
    console.log('Approved:', row)
    // Here you can call an API or update state
  }

  const handleReject = row => {
    console.log('Rejected:', row)
    // Here you can call an API or update state
  }

  useEffect(() => {
    // axios.get('/pages/profile-table', { params: { q: value } }).then(response => {
    //   setData(response.data)
    // })
    setData(mockRows)
  }, [value])

  const handleFilter = val => {
    setValue(val)
  }
  const renderName = row => {
    if (row.avatar) {
      return <CustomAvatar src={row.avatar} sx={{ mr: 2, width: 35, height: 35 }} />
    } else {
      return (
        <CustomAvatar
          skin='light'
          sx={{ mr: 2, width: 35, height: 35, fontSize: '0.875rem' }}
          color={row.avatarColor || 'primary'}
        >
          {getInitials(row.name || 'John Doe')}
        </CustomAvatar>
      )
    }
  }

  const columns = [
    {
      flex: 0.1,
      field: 'name',
      minWidth: 220,
      headerName: 'Name',
      renderCell: ({ row }) => {
        const { name, date } = row

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {renderName(row)}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography noWrap sx={{ color: 'text.secondary', fontWeight: 700 }}>
                {name}
              </Typography>
            </Box>
          </Box>
        )
      }
    },
    {
      flex: 0.1,
      minWidth: 105,
      field: 'company',
      headerName: 'Company',
      renderCell: ({ row }) => <Typography sx={{ color: 'text.secondary' }}>{row.leader}</Typography>
    },
    {
      flex: 0.1,
      field: 'jobTitle',
      headerName: 'Job Title',
      renderCell: ({ row }) => <Typography>{row.jobTitle}</Typography>
    },
    {
      flex: 0.1,
      field: 'designation',
      headerName: 'Designation',
      renderCell: ({ row }) => <Typography>{row.designation}</Typography>
    },

    {
      flex: 0.1,
      minWidth: 100,
      sortable: false,
      field: 'actions',
      headerName: 'Actions',
      renderCell: ({ row }) => (
        <OptionsMenu
          iconButtonProps={{ size: 'small' }}
          options={[
            {
              text: 'View',
              menuItemProps: {
                onClick: () => handleView(row)
              }
            },
            {
              text: 'Approved',
              menuItemProps: {
                onClick: () => handleApprove(row)
              }
            },
            { divider: true, dividerProps: { sx: { my: theme => `${theme.spacing(2)} !important` } } },
            {
              text: 'Reject',
              menuItemProps: {
                onClick: () => handleReject(row),
                sx: {
                  color: 'error.main',
                  '&:not(.Mui-focusVisible):hover': {
                    color: 'error.main',
                    backgroundColor: theme => hexToRGBA(theme.palette.error.main, 0.08)
                  }
                }
              }
            }
          ]}
        />
      )
    }
  ]

  return data ? (
    <>
      <Card>
        <JobPortalStats />
      </Card>
      <Card>
        <CardHeader
          title='UnApproved Job Applications'
          titleTypographyProps={{ sx: { mb: [2, 0] } }}
          sx={{ flexDirection: ['column', 'row'], alignItems: ['flex-start', 'center'] }}
          action={
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant='body2' sx={{ mr: 2 }}>
                Search:
              </Typography>
              <TextField size='small' value={value} onChange={e => handleFilter(e.target.value)} />
            </Box>
          }
        />
        <DataGrid
          autoHeight
          pagination
          rows={data}
          columns={columns}
          // checkboxSelection
          pageSizeOptions={[5, 10]}
          disableRowSelectionOnClick
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
        />
        <Modal
          open={openModal}
          onClose={handleCloseModal}
          row={selectedRow}
          onApprove={handleApprove}
          onReject={handleReject}
        />
      </Card>
    </>
  ) : null
}

export default Dashboard
