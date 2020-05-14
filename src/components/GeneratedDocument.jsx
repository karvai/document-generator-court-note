import React from 'react'
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'
import PDFDocument from './PDFDocument'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'

export default function GeneratedDocument(props) {
	return (
		<>
			<PDFViewer width='100%' height='750px' style={{ borderWidth: 0, marginTop: 15 }}>
				<PDFDocument {...props} />
			</PDFViewer>

			<Grid container style={{ justifyContent: 'center', margin: '40px 0' }}>
				<Grid item style={{ margin: 10 }}>
					<Button variant='contained' color='primary'>
						<Link to='/form' style={{ textDecoration: 'none', color: 'white' }}>
							Generate new
						</Link>
					</Button>
				</Grid>
				<Grid item style={{ margin: 10 }}>
					<Button variant='contained' color='primary'>
						<PDFDownloadLink document={<PDFDocument {...props} />} fileName={`Court-Note-${props.firstName}-${props.lastName}.pdf`} style={{ textDecoration: 'none', color: 'white' }}>
							{({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download Pdf')}
						</PDFDownloadLink>
					</Button>
				</Grid>
			</Grid>
		</>
	)
}
