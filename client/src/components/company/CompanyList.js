import React from 'react'
import { connect } from 'react-redux'
import { fetchComps } from '../../actions'
import CompanyCard from './CompanyCard'
import history from '../../history'

const Comapnies = ({ list }) => {
  return list.map(company => {
    return <CompanyCard
      key={company._id}
      title={company.company_name_en}
      clickToCompany={() => history.push(`/company/${company._id}`)}
      compId={company._id}
    />
  })
}

class CompanyList extends React.Component {
  componentDidMount () {
    this.props.fetchComps()
  }

  render () {
    return (
      <div className="company-list-componant">
        <div className='hero-layer'>
          <div className='header-title'>Explore</div>
        </div>
        <div className='container'>
          <div className="ui link cards">{this.props.companyList && <Comapnies list={[...this.props.companyList, ...this.props.companyList, ...this.props.companyList, ...this.props.companyList, ...this.props.companyList, ...this.props.companyList]} />}</div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = ({ user, company }) => {
  console.log('companyList', company.companylist)
  return { email: user.email, companyList: company.companylist }
}
export default connect(mapStateToProps, { fetchComps })(CompanyList)
