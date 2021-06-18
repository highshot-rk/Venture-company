import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { COLORS } from '../../app/config';

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
	},
	root: {
		borderRadius: 3,
		backgroundColor: COLORS.WHITE,
		'& .MuiAutocomplete-inputRoot': {
			// color: COLORS.WHITE,
			paddingTop: 0,
			paddingBottom: 0,
			borderRadius: 3,
		},
		'& .MuiAutocomplete-clearIndicator, & .MuiAutocomplete-popupIndicator': {
			// color: COLORS.SUCCESS
		},
		'& .MuiAutocomplete-input': {
			padding: '20px 10px !important'
		}
	},
	paper: {
		// backgroundColor: COLORS.BLACK,
		zIndex: 10,
		boxShadow: '0px 0px 15px #00000029',
		'& .MuiAutocomplete-option': {
			paddingTop: 15,
			paddingBottom: 15,
		},
		'& .MuiAutocomplete-option[aria-selected="true"]': {
			backgroundColor: COLORS.PRIMARY,
			color: COLORS.WHITE,
		},
		'& .MuiAutocomplete-option[data-focus="true"]': {
			backgroundColor: COLORS.PRIMARY,
			color: COLORS.WHITE,
		},
		'& .MuiAutocomplete-noOptions': {
			// color: COLORS.WHITE
		}
	}
}));

function EgretAutocomplete(props) {
	const { data, className, placeholder, ...rest } = props;
	const classes = useStyles();
	const defaultProps = {
		options: data,
		getOptionLabel: (option) => option.title ? option.title : option,
	};

	return (
		<Autocomplete
			classes={{
				root: classes.root,
				paper: classes.paper
			}}
			{...defaultProps}
			renderInput={(params) => <TextField {...params} label={placeholder} variant="outlined" />}
			{...rest}
      	/>
	);
}

export default EgretAutocomplete;
