import { Layout } from 'antd'
import HeaderComp from '../../components/Header'
import FooterComp from '../../components/Footer'
import { Content } from 'antd/es/layout/layout'

const Appointment = () => {
  return (
    <Layout breakpoints='md'>
      <HeaderComp selectedTab={'appointment'} />
			<Content
				className='doc-app__body'
				style={{
					padding: "0 48px",
				}}
			>
			</Content>
      <FooterComp />
		</Layout>
  )
}

export default Appointment