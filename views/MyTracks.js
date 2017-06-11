/**
 * Created by dejan on 10/6/17.
 */

import React, {
    PropTypes,
} from 'react';

import {
    View,
    ScrollView,
    Text,
    Image,
} from 'react-native';

import Styles from "../helpers/Styles";
import Button from "../custom_components/Button";
import Router from "../helpers/Router";
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './slider/styles/SliderEntry.style';
import SliderEntry from './slider/components/SliderEntry';
import styles from './slider/styles/index.style';
import { ENTRIES1, ENTRIES2 } from './slider/static/entries';

export default class MyTracks extends React.Component {
    static propTypes = {
        user: PropTypes.object
    };

    getSlides (entries) {
        if (!entries) {
            return false;
        }

        return entries.map((entry, index) => {
            return (
                <SliderEntry
                  key={`carousel-entry-${index}`}
                  even={(index + 1) % 2 === 0}
                  {...entry}
                />
            );
        });
    }

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    get example1 () {
        return (
            <Carousel
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              firstItem={1}
              inactiveSlideScale={0.94}
              inactiveSlideOpacity={0.6}
              enableMomentum={true}
              containerCustomStyle={styles.slider}
              contentContainerCustomStyle={styles.sliderContainer}
              showsHorizontalScrollIndicator={true}
              snapOnAndroid={true}
              removeClippedSubviews={false}
            >
                { this.getSlides(ENTRIES1) }
            </Carousel>
        );
    }

    get example2 () {
        return (
            <Carousel
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              inactiveSlideScale={1}
              inactiveSlideOpacity={1}
              enableMomentum={true}
              autoplay={true}
              autoplayDelay={500}
              autoplayInterval={2500}
              containerCustomStyle={styles.slider}
              contentContainerCustomStyle={styles.sliderContainer}
              showsHorizontalScrollIndicator={false}
              snapOnAndroid={true}
              removeClippedSubviews={false}
              >
                  { this.getSlides(ENTRIES2) }
              </Carousel>
        );
    }

    render() {
        return (
            <View style={[Styles.container, Styles.centered, Styles.padded]}>
                {/* TODO: Logo */}

                <Text>Hi, welcome back!</Text>

                <ScrollView
                  style={styles.scrollview}
                  indicatorStyle={'white'}
                  scrollEventThrottle={200}
                >
                    <Text style={styles.title}>Example 1</Text>
                    <Text style={styles.subtitle}>No momentum | Scale | Opacity</Text>
                    { this.example1 }

                </ScrollView>

                <Button
                    title={'Let\'s RHoK!'}
                    onPress={() => this.props.navigator.push(Router.addProps(Router.ROUTES.SelectEvent))}
                />
            </View>
        );
    }
}
