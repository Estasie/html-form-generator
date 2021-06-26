'use strict';

import data from "./data.json" assert { type: "json" };
import createForm from "./form-generator.js";

let form = createForm(data,'dark');

let formParent = document.querySelector('.form-container');

formParent.appendChild(form);