import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://www.citypng.com/public/uploads/preview/zomato-black-logo-hd-png-11662674148bvgltyctin.png"
        // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAAB3CAMAAABmOG/FAAAAe1BMVEX////iN0Tum6DhKTnsiY/gJDXiNULhLTzhMD7gIDHfCCPfABr++fr98vP76uvgIjP41tjjP0v30dP0wcT529zlV2DgFSrocHfsjZPnanL1x8r64uTys7fvoKXnZW3kTljmXmfrgontlJnwqa3peIDeAATfABDkR1Lzur3fNlqbAAADaklEQVR4nO2X25aiOhCGgZgjBOQURVAOugff/wl3Kto90xcza27E3Xv93wUJObjqr6pUMIoAAAAAAAAAAAAAAAAAAAAAAAAA8PfstuD4Ugmas5fD2UslSBG/HBFDAiRAAiRsK0Fw9b0lMNaeL7/R8D0kqLmyWfcflCCU+qNCoRgLK9Rko6gfH4sV419/dVMJnIfvDd94hyqjpok5QaZKVgif7cYpSnrnpG+Y0dPt1vq+SA/+p/bGcNo1zrsDL94kgS/JcvQsybkV/HKiBfXo/XzpdteRlcu+mpSKl6o6KLHO+4wW5AdZNtTLbJYwftnTYHZkb5EguP0cP7j52ctL2VLbrj29rSvZmEl9/ViatePHvp27Zc9uot8hQY0/JUy3YB09akMSsq4PI1P+mOddlOVNQzuG6Wl31oVeeMtW9QYJbP4cvhqy7dSRx215IZNCWkV2/5Qo1+EmTNr5fhUvNDQkS9H4tu/u9LrwdyRS2Y7rgWy/p0GN1hSL7PKIyJyEHXOYioXUYh3H0bv8ZHQY0vqRcXqlOAzFGyT4ysNHypNaOfJ5rVXw/+VMKxMTfH39hyRYXrQDZVZIJBdMN3FB56OXYrVvkxCrcGQbrhhlxJlLKpZ2rOmp2UAGjo7s3DuKVmYt+XsXjn6WxpoW1lKMQes7EilWcVAglBAkIWGa/J//oNHByYoM1CFAQ+mjVbc6pch0jpY1PgohdpKR8Ogm31JU6azmsb9xC+rdjQsZ8YOeRy4px85a0dTirbRCCkMvkyHT76nSdI57bkirLcT2EkRwc9TvmyZXlDTROVwBMR3Z6CIFDc085Nrh6CeEM3TC7WgoZnlS3cK5v4fatePx9hL08HM4LT+7R30gCaMMGd4y+hyyE+VKf61opl/Ns9KOJv/YdfrVN5tJ+DAkorzm8+O6sjvHKd/zlYdi6hR5ui/LJkyfvZ6m1I9yGzn5vPiiQf+aoJtJcKe+b4g+H3Qs23tv+3PLY371lacqNTU2lTO9cTnWNq8v7amqBl+Mr7ltkknFcj03Nr937Eut3u44O/Mkpe8bpU1qCvpK0GmaGhGa1N/h/um8Xc43Svk93uHic60oTJrqr38cvsdfnj8CCZAACZAACd9Hgiv4y9H8pRKSTXipBAAAAAAAAAAAAAAAAAAAAAAAAOD/xr8RW0A7OZqPvAAAAABJRU5ErkJggg=="
        alt="Zomato-logo"
        className="header-logo"
      />

      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i className="fi fi-ss-marker absolute-center location-icon"></i>
              <i class="fi fi-rr-marker absolute-center location-icon"></i>
              <div>Bengaluru</div>
            </div>
            <i className="fi fi-rr-caret-down absolute-center"></i>
          </div>
          <div className="location-search-seperator"></div>
          <div className="header-searchBar">
            <i className="fi fi-rr-search absolute-center search-icon"></i>
            <input
              placeholder="Search for restaurant, cuisine or a dish"
              className="search-input"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <img
            src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?b=1&s=612x612&w=0&k=20&c=IJ1HiV33jl9wTVpneAcU2CEPdGRwuZJsBs_92uk_xNs="
            alt="Profile"
            className="header-profile-image"
          />
          <span className="header-username">Pratika</span>
          <i className="fi fi-bs-angle-down absolute-center profile-options-icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
