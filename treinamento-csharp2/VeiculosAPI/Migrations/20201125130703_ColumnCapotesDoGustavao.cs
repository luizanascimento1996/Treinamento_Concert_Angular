using Microsoft.EntityFrameworkCore.Migrations;

namespace VeiculosAPI.Migrations
{
    public partial class ColumnCapotesDoGustavao : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CapotesDoGustavao",
                table: "Moto",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CapotesDoGustavao",
                table: "Moto");
        }
    }
}
