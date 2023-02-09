import { Box, Typography } from '@mui/material'

interface HeaderProps {
  title: string
  subtitle?: string
  primary?: boolean
}

const Header = ({
  title,
  subtitle,
  primary,
}: HeaderProps) => (
  <Box component={'header'} py={5}>
    <Typography variant={primary ? 'h1' : 'h2'} align='center'>
      {title}
    </Typography>
    {subtitle && (
      <Typography variant='subtitle1' align='center'>
        {subtitle}
      </Typography>
    )}
  </Box>
)

export default Header
