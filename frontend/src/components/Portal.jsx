import React from 'react'
import { styled } from '@mui/material'

const PortalContainer = styled('div')(({ theme }) => ({
  position: "absolute",
  top: "40px",
  height: "400px",
  marginTop: "50px",
  display: "grid",
  zIndex: 5
}))

const PortalColor = styled('div')(({ theme }) => ({
  backgrounColor: "#66BA4F",
  boxShadow: "0px 0px 40px 10px #448C3F",
  height: "24em",
  width: "10em",
  borderRadius: "50%",
  margin: "auto",
  background: "radial-gradient(circle at 77% 80%, #FDFEB4 2.5%, transparent 2.5%), radial-gradient(circle at 75% 83%, #FDFEB4 2%, transparent 2%), radial-gradient(circle at 79% 83%, #FDFEB4 1%, transparent 1%), radial-gradient(circle at 45% 13%, #FFFFD5 1.5%, transparent 1.5%), radial-gradient(circle at 42% 13%, #FFFFD5 2%, transparent 2%), radial-gradient(circle at 38% 14%, #FFFFD5 1.5%, transparent 1.5%), radial-gradient(circle at 20% 24%, #FDFEB4 1%, transparent 1%), radial-gradient(circle at 21% 23%, #FDFEB4 1%, transparent 1%), radial-gradient(circle at 51% 13%, #FDFEB4 1%, transparent 1%), radial-gradient(circle at 81% 33%, #FDFEB4 1%, transparent 1%), radial-gradient(circle at 85% 36%, #FDFEB4 2%, transparent 2%), radial-gradient(circle at 21% 46%, #FDFEB4 1%, transparent 1%), radial-gradient(circle at 20% 51%, #FDFEB4 2%, transparent 2%), radial-gradient(circle at 53% 51%, transparent 64%, #43A93E 64%), radial-gradient(circle at 47% 59%, transparent 64%, #43843E 64%), radial-gradient(circle at 47% 60%, transparent 59%, #1A9042 59%), radial-gradient(circle at 50% 59%, transparent 55%, #1B863C 55%), radial-gradient(circle at 45% 60%, transparent 55%, #399C49 55%), radial-gradient(circle at 47% 60%, transparent 46%, #1A9042 46%), radial-gradient(circle at 46% 55%, transparent 43%, #75B03B 43%), radial-gradient(circle at 36% 55%, transparent 43%, #A9CB48 43%), radial-gradient(circle at 50% 60%, transparent 40%, #66BA4F 40%), radial-gradient(circle at 50% 53%, transparent 40%, #E5E051 37%), radial-gradient(circle at 30% 48%, transparent 40%, #EAF157 37%), radial-gradient(circle at 57% 69%, transparent 40%, #EAF157 40%), radial-gradient(circle at 40% 88%, transparent 40%, #E9E072 37%), radial-gradient(circle at 67% 54%, transparent 40%, #FAEB7B 37%), radial-gradient(circle at 49% 35%, transparent 40%, #FFF8C5 37%), radial-gradient(circle at 79% 59%, transparent 40%, #FFFE9C 37%), radial-gradient(circle at 50% 50%, #FDFEB4 100%, #FDFEB4 100%)"
}))

export default function Portal({ position }) {
  return (
    <PortalContainer sx={{ [position]: "0" }} >
      <PortalColor />
    </PortalContainer>
  )
}