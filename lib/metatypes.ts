export class Type  {
    public constructor(public type: Function) {
    }
}

export class MetaField {
    public constructor(public name: string, public type: Type, public parent: Type) {
    }
}

export class MetaAtomic extends Type {
}

export class MetaContainer extends Type {
}

export class MetaNull extends MetaAtomic {
}

export class MetaUndefined extends MetaAtomic {
}

export class MetaBoolean extends MetaAtomic {
    public constructor() {
        super(Boolean);
    }
}

export class MetaNumber extends MetaAtomic {
    public constructor() {
        super(Number);
    }
}

export class MetaString extends MetaAtomic {
    public constructor() {
        super(String);
    }
}

export class Tuple extends MetaContainer {
    public constructor(public of: Type[]) {
        super(Array);
    }
}

export class Array extends MetaContainer {
    public constructor(public of: Type) {
        super(Array);
    }
}

export class Object extends MetaContainer {
    public constructor(public of: MetaField[] = []) {
        super(Object);
    }
}

export class MetaSet extends MetaContainer {
    public constructor(public of: Type) {
        super(Set);
    }
}

export class Map extends MetaContainer {
    public constructor(public ofKey: Type, public ofValue: Type) {
        super(Map);
    }
}

export class WeakSet extends MetaContainer {
    public constructor(public of: Type) {
        super(WeakSet);
    }
}

export class WeakMap extends MetaContainer {
    public constructor(public ofKey: Type, public ofValue: Type) {
        super(WeakMap);
    }
}

export class MetaClass extends MetaContainer {
    public static readonly root: MetaClass = new MetaClass(Object, [], undefined);

    public constructor(type: Function, public of: MetaField[] = [], public parent: MetaClass = MetaClass.root) {
        super(type);
    }
}
