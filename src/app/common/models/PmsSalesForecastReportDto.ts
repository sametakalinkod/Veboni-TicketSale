export class PmsSalesForecastReportDto {
    id?: number;
    remark?: string;
    date?: Date;
    seans?: string;
    capacity?: number;
    sold?: number;
    remainder?: number;
    detailRemark?: string;
    programDetailId?: string;
    productId?: string;
    displayDate?: string;
    curr?: string;
    ticketPrice?: number | null;
    childTicketPrice?: number | null;
    sunday?: boolean | null;
    monday?: boolean | null;
    tuesday?: boolean | null;
    wednesday?: boolean | null;
    thursday?: boolean | null;
    friday?: boolean | null;
    saturday?: boolean | null;
    seanceBegin?: TimeOnly;
    seanceEnd?: TimeOnly;
    imageList: string[] = [];
}

interface TimeOnly {
    hours: number;
    minutes: number;
    seconds: number;
}
