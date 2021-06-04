import React, { PureComponent } from 'react'
import Number from '../components/Number'
import { Link } from "react-router-dom";
import SwiperCore, { Navigation, Pagination  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination]);

export default class Home extends PureComponent {
  render() {
    return (
      <div className="home">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="intro__wrapper">
              <div className="intro__column">
                <h2>Follow the Sudoku rules!</h2>
                <p>
                  In order to win, you need to follow only three basic rules:
                  <ul>
                    <li>
                      Only one same number in section
                    </li>
                    <li>
                      Only one same number in row (of entire board)
                    </li>
                    <li>
                      Only one same number in column (of entire board)
                    </li>
                  </ul>
                </p>
              </div>
              <img className="intro__column --image" src="/dragndrop-sudoku/group1.png"/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="intro__wrapper">
              <div className="intro__column">
                <h2>Use the drag'n'drop!</h2>
                <p>
                  Grab number from the upper CLIPBOARD and drag them into Sudoku board area!
                </p>
                <p>
                  Drop the numbers in right place, if you want to erase numbers in board area, just use the empty square from clipboard!
                </p>
              </div>
              <img className="intro__column --image" src="/dragndrop-sudoku/group2.png"/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="intro__wrapper">
              <h2 className="text-center">Choose Sudoku set!</h2>
              <div className="d-flex">
                <Link to="/game?set=1"><Number position={ 1 } value={ 1 } draggable="false"/></Link>
                <Link to="/game?set=2"><Number position={ 2 } value={ 2 } draggable="false"/></Link>
                <Link to="/game?set=3"><Number position={ 3 } value={ 3 } draggable="false"/></Link>
                <Link to="/game?set=4"><Number position={ 4 } value={ 4 } draggable="false"/></Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    )
  }
}
