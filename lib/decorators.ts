import * as Meta from './metatypes';

// export const MetaFields = new Map<Function, MetaTypes.MetaField>();
// export const MetaParents = new Map<Function, MetaTypes.MetaClass>();
// export const MetaClasses = new Map<Function, MetaTypes.MetaClass>();

export type AtomicType = SymbolConstructor | BooleanConstructor | NumberConstructor | StringConstructor;
export type TypeHint = Meta.Type | AtomicType | Function;

export class Metatypes 
{
    public class() {
        // debugger;
        console.log('In outer metaclass');
        return function (constructor: Function) {
            // debugger;
            console.log('In inner metaclass');

            // return MetaClasses.get(constructor) || MetaClasses.set(constructor, new MetaTypes.MetaClass(constructor, [], ))
        }
    }

    public field(hint?: TypeHint) {
        debugger;
        console.log('In outer MetaField');

        return function (target: Object, propertyKey: string | symbol): void {
            debugger;
            console.log(`In inner ${ target } MetaField ${ propertyKey }`);
        };
    }
}

export function ArrayOf(of: TypeHint): Meta.Array {
    return <any>null;
}

export function TupleOf(of: TypeHint[]): Meta.Tuple {
    return <any>null;
}

export function ObjectOf(of: TypeHint): Meta.Object {
    return <any>null;
}

export function SetOf(of: TypeHint): Meta.MetaSet {
    return <any>null;
}

export function WeakSetOf(of: TypeHint): Meta.WeakSet {
    return <any>null;
}

export function MapOf(ofKey: TypeHint, ofValue: TypeHint): Meta.Map {
    return <any>null;
}

export function WeakMapOf(ofKey: TypeHint, ofValue: TypeHint): Meta.WeakMap {
    return <any>null;
}
