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
    displayDate?: string;
    totalcapacity?: number;
    totalsold?: number;
    totalremainder?: number;
    totalticketPrice?: number;
    curr?: string;
    ticketPrice?: number;
    childTicketPrice?: number;
    productId?: string;
    imageList: string[] = [];
}
