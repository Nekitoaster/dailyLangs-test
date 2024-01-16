import { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { IoOptionsOutline } from "react-icons/io5";

function AsideElement() {
  const [value, setValue] = useState([1, 6]);

  return (
    <aside className="aside">
      <div className="aside__language-changer-container">
        <p className="language-changer-container__text">Язык</p>
        <span className="language-changer-container__dropdown">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="10"
            viewBox="0 0 17 10"
            fill="none"
          >
            <path
              d="M1 1L8.5 8.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M16 1L8.5 8.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span className="language-changer-container__dropdown_mobile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
          >
            <path
              d="M1 1L7 7"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M13 1L7 7"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </div>
      <span className="aside__search-configurations_mobile">
        <IoOptionsOutline />
      </span>
      <div className="aside__search-configurations">
        <div className="search-configurations__configuration-element">
          <p className="configuration-element__title">Продолжительность</p>
          <label className="configuration-element__label">
            <p className="label__text label__text_slider">
              От {value[0]} до {value[1]} мес.
            </p>
            <RangeSlider
              value={value}
              onInput={setValue}
              min="1"
              max="6"
              step="1"
            />
          </label>
        </div>
        <div
          className="search-configurations__configuration-element"
          style={{ marginTop: "37px" }}
        >
          <p className="configuration-element__title">Сложность</p>
          <div className="configuration-element__configurations-group">
            <div className="configurations-group__group-element">
              <input
                className="group-element__radio-input"
                type="radio"
                id="all"
                name="complexity"
                value="all"
              />
              <label className="group-element__label" htmlFor="all">
                Для всех
              </label>
            </div>
            <div className="configurations-group__group-element">
              <input
                className="group-element__radio-input"
                type="radio"
                id="beginner"
                name="complexity"
                value="beginner"
              />
              <label className="group-element__label" htmlFor="beginner">
                Для начинающих
              </label>
            </div>
            <div className="configurations-group__group-element">
              <input
                className="group-element__radio-input"
                type="radio"
                id="advanced"
                name="complexity"
                value="advanced"
              />
              <label className="group-element__label" htmlFor="advanced">
                Продвинутый уровень
              </label>
            </div>
          </div>
        </div>
        <div
          className="search-configurations__configuration-element"
          style={{ marginTop: "30px" }}
        >
          <p className="configuration-element__title">Навыки</p>
          <div className="configuration-element__configurations-group">
            <div className="configurations-group__group-element">
              <input
                className="group-element__checkbox"
                type="checkbox"
                id="grammar"
                name="grammar"
                value="indigo"
              />
              <label className="group-element__label" htmlFor="grammar">
                Грамматика
              </label>
            </div>
            <div className="configurations-group__group-element">
              <input
                className="group-element__checkbox"
                type="checkbox"
                id="vocabulary"
                name="vocabulary"
                value="red"
              />
              <label className="group-element__label" htmlFor="vocabulary">
                Лексика
              </label>
            </div>

            <div className="configurations-group__group-element">
              <input
                className="group-element__checkbox"
                type="checkbox"
                id="syntax"
                name="syntax"
                value="brown"
              />
              <label className="group-element__label" htmlFor="syntax">
                Синтаксис
              </label>
            </div>

            <div className="configurations-group__group-element">
              <input
                className="group-element__checkbox"
                type="checkbox"
                id="phonetics"
                name="phonetics"
                value="yellow"
              />
              <label className="group-element__label" htmlFor="phonetics">
                Фонетика
              </label>
            </div>

            <div className="configurations-group__group-element">
              <input
                className="group-element__checkbox"
                type="checkbox"
                id="phunctuation"
                name="phunctuation"
                value="green"
              />
              <label className="group-element__label" htmlFor="phunctuation">
                Пунктуация
              </label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default AsideElement;
