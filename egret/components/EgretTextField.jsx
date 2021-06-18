import React from 'react';
import clsx from "clsx";
import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';
import { COLORS } from '../../app/config'

const useStyles = makeStyles({
	root: (props) => ({
    width: '100%',
    '& .MuiInputBase-root': {
      fontSize: '1.25em',
      fontFamily: `"Proxima Nova", "Proxima Nova Alt", "Proxima Nova Black", "Roboto", "Helvetica", "Arial", sans-serif`,
      '& input': {
        padding: '25px 16px'
      }
    },
    "& .MuiOutlinedInput-root": {
      background: `${props.backgroundcolor ? props.backgroundcolor : COLORS.WHITE}`,
      borderRadius: props.borderradius,
      boxShadow: props.boxshadow,
      '&:hover': {
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: 'rgba(00, 161, 241, 0.87)',
        }
      },
      '&.Mui-focused': {
        "& .MuiOutlinedInput-notchedOutline": {
          borderWidth: 1
        }
      }
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: `${props.bordercolor ? props.bordercolor : COLORS.PRIMARY}`,
    }
	}),
});

export default function EgretTextField(props) {
  const { className, backgroundcolor, bordercolor, borderradius, boxshadow, ...rest } = props;
  const classes = useStyles({
    backgroundcolor: backgroundcolor ? backgroundcolor : null,
    bordercolor: bordercolor ? bordercolor : null,
    borderradius: borderradius !== undefined ? borderradius : 10,
    boxshadow: boxshadow ? boxshadow : 'unset',
  });

  return (
    <TextField
      className={clsx(classes.root, className, "egret-textfield")}
      label=""
      variant="outlined"
      {...rest}
    />
  );
}
