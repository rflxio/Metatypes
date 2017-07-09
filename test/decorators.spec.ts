import 'reflect-metadata';

import { expect } from 'chai';
import { Metatypes, ArrayOf } from '../lib/decorators';

// import { MetaClass } from '../lib/decorators';
// import { MetaArray } from '../lib/decorators';
// import { MetaString } from '../lib/decorators';

describe('# Annotation based type description', () => {
    it('should behave properly for basic case', () => {
        var Meta = new Metatypes();

        @Meta.class()
        class Country {
            @Meta.field()
            public name: string;
        }

        @Meta.class()
        class City {
            @Meta.field()
            public name: string;

            @Meta.field(ArrayOf(ArrayOf(Country)))
            public country: Country[];
        }

        debugger;
    });
});


describe('# Fluent based type description', () => {
    it('should behave properly for basic case', () => {
        class Country {
            public name: string;
        }

        class City {
            public name: string;

            public country: Country[];
        }
    });
});

