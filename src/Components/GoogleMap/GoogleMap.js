import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends Component {
    static defaultProps = {
        center: {
            lat: 23.45991327677069,
            lng: 91.18146076381349,
        },
        zoom: 15
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '80vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyDBEisPPzeNkMz2s6xAjfsJwxUZaXRIJ5I" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={23.45991327677069}
                        lng={91.18146076381349}
                        text="Corporate Office"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default GoogleMap;