import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { 
  firestore, 
  convertCollectionsSnapshotToMap 
} from '../../firebase/firebase.utils'

import { updateCollections } from '../../redux/shop/shop.actions'

import WithSpinner from '../../components/with-spinner/with-spinner.component'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component' 

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
  state = {
    loading: true
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections')

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
      // console.log(collectionsMap)
      this.setState({ loading: false })
    })

    // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-8529a/databases/(default)/documents/collections')
    // .then(res => res.json())
    // .then(console.log) // {documents: Array(5)}    

    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
    //   updateCollections(collectionsMap)
    //   // console.log(collectionsMap)
    //   this.setState({ loading: false })
    // })
  }
   
  render() {
    const { match } = this.props;
    const { loading } = this.state
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`} 
          // component={CollectionsOverview}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          // component={CollectionPage}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => 
    dispatch(updateCollections(collectionsMap))
})

export default connect(
  null, 
  mapDispatchToProps
)(ShopPage)