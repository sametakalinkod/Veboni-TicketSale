import { PmsSalesForecastReportDto } from "../../models/products/PmsSalesForecastReportDto";

export class GroupProductsListBySession {
    date?: Date;
    productId?: string;
    child: PmsSalesForecastReportDto[] = [];
}
