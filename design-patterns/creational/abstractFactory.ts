export interface Chair {
    sit(): string;
}
export interface Table {
    putObject(): string;
}

export interface AbstractFurnitureFactory {
    createChair() : Chair;
    createTable() : Table;
}

export class VintageChair implements Chair {
    sit(): string {
       return "I'm a vintage chair";
    }
}

export class ModernChair implements Chair {
    sit(): string {
       return "I'm a modern chair";
    }
}

export class VintageTable implements Table {
    putObject(): string {
       return "I'm a vintage table";
    }
}

export class ModernTable implements Table {
    putObject(): string {
       return "I'm a modern table";
    }
}

export class ConcreteVintageFactory implements AbstractFurnitureFactory {
    createChair(): Chair {
        return new VintageChair();
    }
    createTable(): VintageTable {
        return new VintageTable();
    }
}

export class ConcreteModernFactory implements AbstractFurnitureFactory {
    createChair(): Chair {
        return new ModernChair();
    }
    createTable(): VintageTable {
        return new ModernTable();
    }
}