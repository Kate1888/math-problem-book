import { Link } from 'react-router-dom';
import './MainPage.css';

function MainPage() {
	return (
		<div className="MainPage">
			<h1><p align="center">Самостоятельные и контрольные работы по математике 6 класс</p></h1>
			<h1><p align="center">Оглавление</p></h1>
			<div className='margin-class'><font size="5"><h3>Самостоятельные рыботы:</h3></font></div>
			<ol className='margin-class'>
				<font size="3">
					<li><Link to="individual-work/1"><h3>По теме действия с натуральными числами</h3></Link></li>
					<li><Link to="individual-work/2"><h3>По теме числовые и буквенные выражения</h3></Link></li>
					<li><Link to="individual-work/3"><h3>По теме признаки делимости натуральных чисел</h3></Link></li>
					<li><Link to="individual-work/4"><h3>По теме простые и составные числа</h3></Link></li>
					<li><Link to="individual-work/5"><h3>По теме нахождение наибольшего общего делителя</h3></Link></li>
					<li><Link to="individual-work/6"><h3>По теме нахождение наименьшего общего кратного</h3></Link></li>
					<li><Link to="individual-work/7"><h3>По теме многоугольники</h3></Link></li>
					<li><Link to="individual-work/8"><h3>По теме окружность, круг и многогранники</h3></Link></li>
					<li><Link to="individual-work/9"><h3>По теме обыкновенные дроби</h3></Link></li>
					<li><Link to="individual-work/10"><h3>По теме десятичные дроби</h3></Link></li>
					<li><Link to="individual-work/11"><h3>По теме преобразование обыкновенной дроби в десятичную, десятичное приближение обыкновенной дроби</h3></Link></li>
					<li><Link to="individual-work/12"><h3>По теме среднее арифметическое, среднее значение величин</h3></Link></li>
					<li><Link to="individual-work/13"><h3>По теме проценты, нахождение процентов от числа</h3></Link></li>
					<li><Link to="individual-work/14"><h3>По теме нахождение числа по его процентам</h3></Link></li>
					<li><Link to="individual-work/15"><h3>По теме отношение</h3></Link></li>
					<li><Link to="individual-work/16"><h3>По теме пропорции</h3></Link></li>
					<li><Link to="individual-work/17"><h3>По теме процентное отношение двух чисел</h3></Link></li>
					<li><Link to="individual-work/18"><h3>По теме прямая и обратная пропорциональная зависимость</h3></Link></li>
					<li><Link to="individual-work/19"><h3>По теме деление числа в данном отношении</h3></Link></li>
					<li><Link to="individual-work/20"><h3>По теме длина окружности, круг, цилиндр, конус и шар</h3></Link></li>
					<li><Link to="individual-work/21"><h3>По теме диаграммы</h3></Link></li>
					<li><Link to="individual-work/22"><h3>По теме комбинаторные задачи</h3></Link></li>
					<li><Link to="individual-work/23"><h3>По теме положительные и отрицательные числа</h3></Link></li>
					<li><Link to="individual-work/24"><h3>По теме координатная прямая</h3></Link></li>
					<li><Link to="individual-work/25"><h3>По теме целые и рациональные числа</h3></Link></li>
					<li><Link to="individual-work/26"><h3>По теме модуль числа</h3></Link></li>
					<li><Link to="individual-work/27"><h3>По теме сравнение рациональных чисел</h3></Link></li>
					<li><Link to="individual-work/28"><h3>По теме сложение рациональных чисел</h3></Link></li>
					<li><Link to="individual-work/29"><h3>По теме вычитание рациональных чисел</h3></Link></li>
					<li><Link to="individual-work/30"><h3>По теме умножение рациональных чисел</h3></Link></li>
					<li><Link to="individual-work/31"><h3>По теме переместительное и сочетательное свойство умножения рациональных чисел</h3></Link></li>
					<li><Link to="individual-work/32"><h3>По теме распределительное свойство умножения рациональных чисел</h3></Link></li>
					<li><Link to="individual-work/33"><h3>По теме деление рациональных чисел</h3></Link></li>
					<li><Link to="individual-work/34"><h3>По теме решение уравнений</h3></Link></li>
					<li><Link to="individual-work/35"><h3>По теме решение задач с помощью уравнений</h3></Link></li>
					<li><Link to="individual-work/36"><h3>По теме перпендикулярная прямая</h3></Link></li>
					<li><Link to="individual-work/37"><h3>По теме осевая и центральная симметрии</h3></Link></li>
					<li><Link to="individual-work/38"><h3>По теме параллельные прямые</h3></Link></li>
					<li><Link to="individual-work/39"><h3>По теме координатная плоскость</h3></Link></li>
					<li><Link to="individual-work/40"><h3>По теме графики</h3></Link></li>
				</font>
			</ol>
			<div className='margin-class'><font size="5"><h3>Контрольные рыботы:</h3></font></div>
			<ol className='margin-class'>
				<font size="3">
					<li><Link to="control-work/1"><h3>По теме натуральные числа</h3></Link></li>
					<li><Link to="control-work/2"><h3>По теме геометрические фигуры, фигуры на плоскости</h3></Link></li>
					<li><Link to="control-work/3"><h3>По теме дроби</h3></Link></li>
					<li><Link to="control-work/4"><h3>По теме рациональные числа</h3></Link></li>
					<li><Link to="control-work/5"><h3>Итоговая контрольная работа</h3></Link></li>
				</font>
			</ol>
		</div>
	);
}

export default MainPage;