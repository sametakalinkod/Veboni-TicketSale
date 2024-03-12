import { PmsSalesForecastReportDto } from "./PmsSalesForecastReportDto";

export class PmsProductSessionsByIdDto {
    recId?: string;
    programEndDate?: string;
    imageJson?: string;
    htmlList?: string;
    imageList: string[] = [];
    sessions: PmsSalesForecastReportDto[] = [];
} 