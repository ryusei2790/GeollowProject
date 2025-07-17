import styles from './searchNav.module.css';

export default function SearchNav() {
  return (
    <section className={styles["searchNavSection"]}>
      <div className={styles["searchNavSection__search"]}>
        <form className={styles["searchNavSection__search--form"]}>
          <input
            type="text"
            className={styles["searchNavSection__search--form_input"]}
            placeholder="Address, neighborhood, city, ZIP"
          />
          <button type="submit" className={styles["searchNavSection__search--form_button"]}>
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
      <div className={styles["searchNavSection__select"]}>
        <div className={styles["searchNavSection__select--custom_select"]}>
          <button className={styles["searchNavSection__select--trigger"]}>For Sale <span className={styles["searchNavSection__select--arrow"]}>▼</span></button>
          <div className={styles["searchNavSection__select--dropdown"]}>
            <label className={styles["searchNavSection__select--option"]}>
              <input type="radio" name="status" value="for-sale" defaultChecked />
              <span>For Sale</span>
            </label>
            <label className={styles["searchNavSection__select--option"]}>
              <input type="radio" name="status" value="for-rent" />
              <span>For Rent</span>
            </label>
            <label className={styles["searchNavSection__select--option"]}>
              <input type="radio" name="status" value="sold" />
              <span>Sold</span>
            </label>
            <button className={styles["searchNavSection__select--apply_btn"]} type="button">Apply</button>
          </div>
        </div>
        <div className={styles["searchNavSection__select--custom_select"]}>
          <button className={styles["searchNavSection__select--trigger"]}>Price <span className={styles["searchNavSection__select--arrow"]}>▼</span></button>
          <div className={`${styles["searchNavSection__select--dropdown"]} ${styles["searchNavSection__select--dropdown_price"]}`}>
            <div className={styles["searchNavSection__select--dropdown_title"]}>Price Range</div>
            <div className={styles["searchNavSection__select--price_row"]}>
              <div className={styles["searchNavSection__select--price_col"]}>
                <div className={styles["searchNavSection__select--price_label"]}>Minimum</div>
                <select className={styles["searchNavSection__select--price_select"]}>
                  <option>No Min</option>
                  <option>¥50,000</option>
                  <option>¥100,000</option>
                  <option>¥200,000</option>
                </select>
              </div>
              <div className={styles["searchNavSection__select--price_separator"]}>-</div>
              <div className={styles["searchNavSection__select--price_col"]}>
                <div className={styles["searchNavSection__select--price_label"]}>Maximum</div>
                <select className={styles["searchNavSection__select--price_select"]}>
                  <option>No Max</option>
                  <option>¥200,000</option>
                  <option>¥500,000</option>
                  <option>¥1,000,000</option>
                </select>
              </div>
            </div>
            <button className={styles["searchNavSection__select--apply_btn"]} type="button">Apply</button>
          </div>
        </div>
        <div className={styles["searchNavSection__select--custom_select"]}>
          <button className={styles["searchNavSection__select--trigger"]}>Beds & Baths <span className={styles["searchNavSection__select--arrow"]}>▼</span></button>
          <div className={`${styles["searchNavSection__select--dropdown"]} ${styles["searchNavSection__select--dropdown_beds"]}`}>
            <div className={styles["searchNavSection__select--dropdown_title"]}>Number of Bedrooms</div>
            <div className={styles["searchNavSection__select--beds_section"]}>
              <div className={styles["searchNavSection__select--beds_label"]}>Bedrooms</div>
              <div className={styles["searchNavSection__select--beds_options"]}>
                <button className={`${styles["searchNavSection__select--beds_btn"]} ${styles["searchNavSection__select--beds_btn_active"]}`} type="button">Any</button>
                <button className={styles["searchNavSection__select--beds_btn"]} type="button">1+</button>
                <button className={styles["searchNavSection__select--beds_btn"]} type="button">2+</button>
                <button className={styles["searchNavSection__select--beds_btn"]} type="button">3+</button>
                <button className={styles["searchNavSection__select--beds_btn"]} type="button">4+</button>
                <button className={styles["searchNavSection__select--beds_btn"]} type="button">5+</button>
              </div>
              <label className={styles["searchNavSection__select--exact_match"]}>
                <input type="checkbox" />
                <span>Use exact match</span>
              </label>
            </div>
            <div className={styles["searchNavSection__select--dropdown_title"]} style={{marginTop:24}}>Number of Bathrooms</div>
            <div className={styles["searchNavSection__select--beds_section"]}>
              <div className={styles["searchNavSection__select--beds_label"]}>Bathrooms</div>
              <div className={styles["searchNavSection__select--beds_options"]}>
                <button className={`${styles["searchNavSection__select--beds_btn"]} ${styles["searchNavSection__select--beds_btn_active"]}`} type="button">Any</button>
                <button className={styles["searchNavSection__select--beds_btn"]} type="button">1+</button>
                <button className={styles["searchNavSection__select--beds_btn"]} type="button">1.5+</button>
                <button className={styles["searchNavSection__select--beds_btn"]} type="button">2+</button>
                <button className={styles["searchNavSection__select--beds_btn"]} type="button">3+</button>
                <button className={styles["searchNavSection__select--beds_btn"]} type="button">4+</button>
              </div>
            </div>
            <button className={styles["searchNavSection__select--apply_btn"]} type="button">Apply</button>
          </div>
        </div>
        <div className={styles["searchNavSection__select--custom_select"]}>
          <button className={styles["searchNavSection__select--trigger"]}>Home Type <span className={styles["searchNavSection__select--arrow"]}>▼</span></button>
          <div className={`${styles["searchNavSection__select--dropdown"]} ${styles["searchNavSection__select--dropdown_home_type"]}`}>
            <div className={styles["searchNavSection__select--dropdown_title"]}>Home Type</div>
            <label className={`${styles["searchNavSection__select--home_type_option"]} ${styles["searchNavSection__select--deselect_all"]}`}>
              <input type="checkbox" className={styles["searchNavSection__select--deselect_all_checkbox"]} defaultChecked />
              <span className={styles["searchNavSection__select--checkmark"]}></span>
              <span className={styles["searchNavSection__select--deselect_label"]}>Deselect All</span>
            </label>
            <label className={styles["searchNavSection__select--home_type_option"]}>
              <input type="checkbox" className={styles["searchNavSection__select--home_type_checkbox"]} defaultChecked />
              <span className={styles["searchNavSection__select--checkmark"]}></span>
              Houses
            </label>
            <label className={styles["searchNavSection__select--home_type_option"]}>
              <input type="checkbox" className={styles["searchNavSection__select--home_type_checkbox"]} defaultChecked />
              <span className={styles["searchNavSection__select--checkmark"]}></span>
              Apartments/Condos/Co-ops
            </label>
            <label className={styles["searchNavSection__select--home_type_option"]}>
              <input type="checkbox" className={styles["searchNavSection__select--home_type_checkbox"]} defaultChecked />
              <span className={styles["searchNavSection__select--checkmark"]}></span>
              Townhomes
            </label>
            <div className={styles["searchNavSection__select--dropdown_section_title"]}>Space</div>
            <label className={styles["searchNavSection__select--home_type_option"]}>
              <input type="checkbox" className={styles["searchNavSection__select--space_checkbox"]} defaultChecked />
              <span className={styles["searchNavSection__select--checkmark"]}></span>
              Entire place
            </label>
            <label className={styles["searchNavSection__select--home_type_option"]}>
              <input type="checkbox" className={styles["searchNavSection__select--space_checkbox"]} />
              <span className={styles["searchNavSection__select--checkmark"]}></span>
              Room
            </label>
            <button className={styles["searchNavSection__select--apply_btn"]} type="button">Apply</button>
          </div>
        </div>
        <div className={styles["searchNavSection__select--custom_select"]}>
          <button className={styles["searchNavSection__select--trigger"]}>More <span className={styles["searchNavSection__select--arrow"]}>▼</span></button>
          <div className={`${styles["searchNavSection__select--dropdown"]} ${styles["searchNavSection__select--dropdown_more"]}`}>
            <div className={styles["searchNavSection__select--dropdown_title"]}>MORE FILTERS</div>

            <div className={styles["searchNavSection__select--more_section"]}>
              <div className={styles["searchNavSection__select--more_label"]}>Move-In Date</div>
              <div className={styles["searchNavSection__select--more_date"]}>
                <input type="text" className={styles["searchNavSection__select--more_date_input"]} placeholder="MM/DD/YYYY" readOnly />
                <span className={styles["searchNavSection__select--calendar_icon"]}>📅</span>
              </div>
            </div>

            <div className={styles["searchNavSection__select--more_section"]}>
              <div className={styles["searchNavSection__select--more_label"]}>Square feet</div>
              <div className={styles["searchNavSection__select--more_range"]}>
                <select className={styles["searchNavSection__select--more_select"]}><option>No Min</option><option>500</option><option>1000</option></select>
                <span className={styles["searchNavSection__select--more_separator"]}>-</span>
                <select className={styles["searchNavSection__select--more_select"]}><option>No Max</option><option>2000</option><option>3000</option></select>
              </div>
            </div>

            <div className={styles["searchNavSection__select--more_section"]}>
              <div className={styles["searchNavSection__select--more_label"]}>Lot size</div>
              <div className={styles["searchNavSection__select--more_range"]}>
                <select className={styles["searchNavSection__select--more_select"]}><option>No Min</option><option>100</option><option>200</option></select>
                <span className={styles["searchNavSection__select--more_separator"]}>-</span>
                <select className={styles["searchNavSection__select--more_select"]}><option>No Max</option><option>500</option><option>1000</option></select>
              </div>
            </div>

            <div className={styles["searchNavSection__select--more_section"]}>
              <div className={styles["searchNavSection__select--more_label"]}>Year built</div>
              <div className={styles["searchNavSection__select--more_range"]}>
                <input type="text" className={styles["searchNavSection__select--more_input"]} placeholder="No Min" />
                <span className={styles["searchNavSection__select--more_separator"]}>-</span>
                <input type="text" className={styles["searchNavSection__select--more_input"]} placeholder="No Max" />
              </div>
            </div>

            <div className={styles["searchNavSection__select--more_section"]}>
              <div className={styles["searchNavSection__select--more_label"]}>Basement</div>
              <label className={styles["searchNavSection__select--more_checkbox"]}>
                <input type="checkbox" />
                Has basement
              </label>
            </div>

            <div className={styles["searchNavSection__select--more_section"]}>
              <div className={styles["searchNavSection__select--more_label"]}>Number Of Stories</div>
              <label className={styles["searchNavSection__select--more_checkbox"]}>
                <input type="checkbox" />
                Single-story only
              </label>
            </div>

            <div className={styles["searchNavSection__select--more_actions"]}>
              <button className={styles["searchNavSection__select--reset_btn"]} type="button">Reset all filters</button>
              <button className={styles["searchNavSection__select--apply_btn"]} type="button">Apply</button>
            </div>
          </div>
        </div>
        <div className={styles["searchNavSection__select--custom_select"]}>
          <button className={styles["searchNavSection__select--save_search_btn"]} type="button">Save search</button>
        </div>
      </div>
    </section>
  );
}