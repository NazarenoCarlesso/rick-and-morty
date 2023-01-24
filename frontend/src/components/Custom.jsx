import { alpha, Box, Button, Checkbox, Grid, InputBase, Paper, Select, styled, TextField, Typography } from '@mui/material'

export const SelectCustom = styled(Select)(() => ({
    "& .MuiSvgIcon-root": {
        color: "#00c308",
    },
    "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "transparent",
        borderRadius: "1rem",
    },
    '&:before': {
        borderColor: "#00660e",
    }
}))

export const SearchBar = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha("#40db00", 0.10),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}))

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    width: "100%",
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}))

export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}))

export const Montserrat = styled(Typography)((theme) => ({
    fontFamily: "Montserrat",
}))

export const MontserratBold = styled(Typography)((theme) => ({
    fontFamily: "Montserrat",
    fontWeight: "bold",
}))

export const MontserratNav = styled(Montserrat)(({ theme }) => ({
    color: "#00d109",
    width: "90px",
    [theme.breakpoints.down('sm')]: {
        width: "inherit",
    }
}))

export const LogoNav = styled(Box)(({ theme }) => ({
    width: "150px",
    mixBlendMode: "hard-light",
    opacity: 0.7,
    [theme.breakpoints.down('sm')]: {
        display: "none",
    }
}))

export const TypoCharacter = styled(Typography)((theme) => ({
    color: "61d718",
    lineHeight: "28px",
    letterSpacing: "0.15em",
    fontFamily: "Montserrat",
    fontWeight: "bold",
}))

export const BoxCharacter = styled(Box)((theme) => ({
    width: "240px",
    borderRadius: "60px",
}))

export const GridCharacter = styled(Grid)((theme) => ({
    width: "240px",
    textAlign: "center",
}))

export const ButtonNav = styled(Button)((theme) => ({
    textTransform: "none",
    '&:hover': {
        background: "none",
    }
}))

export const NeonPaper = styled(Paper)((theme) => ({
    width: "600px",
    color: "#40db00",
    backgroundColor: "#001405c2",
    backgroundImage: "none",
    border: "solid 2px",
    boxShadow: "inset 0px 0px 12px 2px #91ff003b, 0px 0px 12px 2px #91ff003b",
    padding: "20px",
    margin: "20px",
    borderRadius: "0rem"
}))

export const PaperTriple = styled(NeonPaper)((theme) => ({
    width: "280px",
    minHeight: "240px",
    backgroundColor: "transparent",
}))

export const TextFieldCustom = styled(TextField)((theme) => ({
    '& .MuiFormLabel-root': {
        color: "#00660e"
    },
    '& .MuiInputBase-root': {
        '&:before': {
            borderColor: "#00660e",
        }
    }
}))

export const CheckboxCustom = styled(Checkbox)((theme) => ({
    '& .MuiSvgIcon-root': {
        fill: "#00a507"
    }
}))

export const Filter = styled(NeonPaper)(({ theme }) => ({
    width: "900px",
    maxWidth: "80vw",
    padding: "14px",
    margin: "0px",
    [theme.breakpoints.down('lg')]: {
        width: "600px",
    },
    [theme.breakpoints.down('md')]: {
        width: "400px",
    },
    [theme.breakpoints.down('sm')]: {
        width: "260px",
    },
}))

export const Space = styled(Grid)(({ theme }) => ({
    height: "250px",
    [theme.breakpoints.down('lg')]: {
        height: "220px",
    },
    [theme.breakpoints.down('md')]: {
        height: "160px",
    },
    [theme.breakpoints.down('sm')]: {
        height: "100px",
    },
}))

export const ImgDetail = styled(Box)(({ theme }) => ({
    height: "300px",
    width: "300px",
    [theme.breakpoints.down(460)]: {
        height: "250px",
        width: "250px",
    },
    [theme.breakpoints.down(410)]: {
        height: "230px",
        width: "230px",
    },
}))